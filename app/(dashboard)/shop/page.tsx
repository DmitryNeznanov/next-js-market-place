import getItems from "@/lib/getItems"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "../../components/Filters"
import Item from "@/app/models/Item"
export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const filterQuery = searchParams.filters

  const rawData = await getItems()
  const data = rawData.items

  const filteredData = await Item.find({ categories: [`${filterQuery}`] })

  console.log(filteredData)

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
    <section className="">
      <h2>Shop</h2>
      <Filters categories={itemsCategories} />
      <section className="mt-[2rem] lg:mt-[4rem] columns-1 sm:columns-2 lg:columns-3 gap-x-[3.125rem]">
        <Suspense fallback={<h2>Items is loading!</h2>}>
          {actualData.map((item: any) => {
            return (
              <article
                className="mb-[3.125rem] max-w-full w-full inline-block"
                key={item._id}
              >
                <Image
                  className="w-full"
                  src={item.img.src}
                  width={item.img.width}
                  height={item.img.height}
                  alt={item.img.alt}
                ></Image>
                <h3 className="mt-[1.25rem] lg:mt-[1.5rem]">{item.item}</h3>
                <p className="mt-[1rem] lg:mt-[1.25rem]">${item.price}</p>
              </article>
            )
          })}
        </Suspense>
      </section>
    </section>
  )
}
