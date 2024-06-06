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
    <section className="">
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Item is loading...</h2>}
      >
        <section>
          <Image
            className="w-[50%]"
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
          <h2>{data.item}</h2>
          <p className="heading-2">{data.price}$</p>
          <div>{/* Raiting */}</div>
          <p>{data.aboutItem}</p>
          <form action="submit">
            <div>{/* size */}</div>
            <input
              className="input-primary"
              defaultValue="1"
            ></input>
            <button className="button-primary">add to cart</button>
          </form>
          <p className="flex flex-row capitalize">
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
