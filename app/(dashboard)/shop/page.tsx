import getItems from "@/lib/getItems"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "../../components/Filters"
import Item from "@/app/models/Item"
import Link from "next/link"
import { Types } from "mongoose"
export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

export default async function ShopPage({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
  params: { id: Types.ObjectId }
}) {
  const filterQuery = searchParams.filters

  const rawData = await getItems()
  const data = rawData.items

  const filteredData = await Item.find({
    categories: { $all: [`${filterQuery}`] },
  })

  const itemsCategories = [
    "technology",
    "interface design",
    "art",
    "modern",
    "product",
    "feature",
  ]

  const actualData = filterQuery === undefined ? data : filteredData

  return (
    <section>
      <h2>Shop</h2>
      <Filters categories={itemsCategories} />
      <section className="mt-[2rem] lg:mt-[4rem] columns-1 sm:columns-2 lg:columns-3 gap-x-[3.125rem]">
        <Suspense
          fallback={<h2 className="text-[4rem]/[4rem]">Items is loading!</h2>}
        >
          {actualData.map((item: any) => {
            return (
              <article
                className="mb-[3.125rem] max-w-full w-full inline-block"
                key={item._id}
              >
                <Link
                  className="group"
                  href={`/shop/${item._id}`}
                >
                  <Image
                    className="w-full"
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                  ></Image>
                  <h3 className="mt-[1.25rem] lg:mt-[1.5rem] group-hover:accent-underline">
                    {item.item}
                  </h3>
                  <p className="mt-[1rem] lg:mt-[1.25rem]">${item.price}</p>
                </Link>
              </article>
            )
          })}
        </Suspense>
      </section>
    </section>
  )
}
