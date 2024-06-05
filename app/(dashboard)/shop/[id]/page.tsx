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
    <section>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Item is loading...</h2>}
      >
        <div>
          <h2>{data.item}</h2>
          <Image
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
          />
        </div>
      </Suspense>
    </section>
  )
}
