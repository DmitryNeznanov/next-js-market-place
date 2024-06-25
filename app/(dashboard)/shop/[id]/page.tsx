import ItemCarousel from "@/app/components/ItemCarousel"
import StarRating from "@/app/components/StarRating"
import Tabs from "@/app/components/Tabs"
import Item from "@/app/models/Item"
import { Types } from "mongoose"
import Image from "next/image"
import { Suspense } from "react"

export async function generateStaticParams() {
  const data: Item[] = await Item.find()
  return data.map((item: Item) => {
    id: item._id
  })
}
export async function generateMetadata({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = (await Item.findById(params.id)) as Item
  return {
    title: `Sheen | ${data.item}`,
    description: `This page about "${data.item}" and has ${data._id} ID`,
  }
}

export default async function ItemPage({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = (await Item.findById(params.id)) as Item
  const safetyData = JSON.parse(JSON.stringify(data))

  return (
    <section>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Item is loading...</h2>}
      >
        <div className="flex flex-col lg:flex-row gap-y-[2.55rem] lg:gap-y-[0] lg:gap-x-[3.1rem]">
          <section className="w-full lg:max-w-[60%]">
            <ItemCarousel data={safetyData} />
          </section>
          <section>
            <h2 className="capitalize">{data.item}</h2>
            <p className="mt-[1rem] heading-2">{data.price}$</p>
            <div className="mt-[2rem] lg:mt-[4rem]">
              <StarRating />
            </div>
            <p className="mt-[.75rem] lg:mt-[1.5rem]">{data.about}</p>
            <form className="">
              <div className="mt-[1.5rem]">
                <label
                  className="text-base"
                  htmlFor="size"
                >
                  Choose an size:
                </label>
                <select
                  className="w-full py-[.25rem] text-base text-gray-light bg-black border-b border-b-gray capitalize"
                  name="size"
                >
                  {data.sizes.map((size, i) => {
                    return (
                      <option
                        className="capitalize"
                        value={size}
                        key={i}
                      >
                        {size}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="mt-[2.5rem] lg:mt-[5rem] flex flex-row gap-x-[.5rem] lg:gap-x-[1rem]">
                <input
                  className="w-[15%] input-primary text-center border border-gray-light"
                  defaultValue="1"
                ></input>
                <button className="w-full button-primary">add to cart</button>
              </div>
            </form>
            <p className="mt-[1.5rem] lg:mt-[3rem]  capitalize">
              Categories:&ensp;
              {data.categories.map((category, i) => {
                return (
                  <span
                    className="text-gray-light"
                    key={i}
                  >
                    {i + 1 !== data.categories.length
                      ? `${category},${String.fromCharCode(160)}`
                      : category}
                  </span>
                )
              })}
            </p>
          </section>
        </div>
        <section className="mt-[2rem] sm:mt-[4rem] lg:mt-[8rem]">
          <Tabs data={safetyData} />
        </section>
      </Suspense>
    </section>
  )
}
