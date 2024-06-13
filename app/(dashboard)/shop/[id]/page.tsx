import StarRating from "@/app/components/StarRating"
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

  return (
    <section className="flex flex-col lg:flex-row">
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Item is loading...</h2>}
      >
        <section className="max-w-[50%] w-full">
          <Image
            className="w-[100%]"
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
            priority={true}
          />
          {/* {Array.from({ length: 5 }).map((_, i) => {
            return (
              <Image
                key={i}
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
              />
            )
          })} */}
        </section>
        <article>
          <h2 className="capitalize">{data.item}</h2>
          <p className="mt-[1rem] heading-2">{data.price}$</p>
          <div className="mt-[2rem] lg:mt-[4rem]">
            <StarRating />
          </div>
          <p className="mt-[.75rem] lg:mt-[1.5rem]">{data.aboutItem}</p>
          <form className="">
            <div className="mt-[1.5rem]">
              <label
                className=" text-base"
                htmlFor="size"
              >
                Choose an size:
              </label>
              <select
                className="w-full py-[.25rem] text-base text-gray bg-black border-b border-b-gray"
                name="size"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
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
          <p className="mt-[1.5rem] lg:mt-[3rem] flex flex-row capitalize">
            Categories:&ensp;
            {data.categories.map((category, i) => {
              return (
                <span
                  className="text-gray"
                  key={i}
                >
                  {i + 1 !== data.categories.length
                    ? `${category},${String.fromCharCode(160)}`
                    : category}
                </span>
              )
            })}
          </p>
        </article>
      </Suspense>
    </section>
  )
}
