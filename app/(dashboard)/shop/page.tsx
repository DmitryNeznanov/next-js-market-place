import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "@/app/components/Filters"
import Link from "next/link"
import Item from "@/app/models/Item"
import Pagination from "@/app/components/Pagination"
export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { filters: string; page: number }
}) {
  const data = (await Item.find()) as Item[]

  const filteredData = (await Item.find({
    categories: { $all: [`${searchParams.filters}`] },
  })) as Item[]

  const itemsCategories: string[] = [
    "technology",
    "interface design",
    "art",
    "modern",
    "product",
    "feature",
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const currentPage = searchParams.page

  function paginate(data: any[]) {
    const maxValue = currentPage * itemsPerPage
    const minValue = maxValue - itemsPerPage
    const currentPageData = data.slice(minValue, maxValue)
    return currentPageData
  }
  const actualData: Item[] =
    searchParams.filters === undefined ? data : filteredData

  const testData = paginate(actualData)

  return (
    <section>
      <h2>Shop</h2>
      <Filters categories={itemsCategories} />
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Items is loading...</h2>}
      >
        <section className="flex flex-row flex-wrap justify-between lg:justify-between lg:flex-wrap gap-y-[2rem] lg:gap-y-[4rem]">
          {testData.map((item: Item) => {
            return (
              <article
                className="w-full max-w-[300px] lg:max-w-[540px]"
                key={item._id}
              >
                <Link
                  className="group"
                  href={`/shop?page=1/${item._id}`}
                >
                  <Image
                    className="size-full max-w-[540px] lg:max-h-[540px]"
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                    priority={true}
                  ></Image>
                  <h3 className="mt-[1.25rem] lg:mt-[1.5rem] group-hover:accent-underline">
                    {item.item}
                  </h3>
                  <p className="mt-[1rem] lg:mt-[1.25rem]">${item.price}</p>
                </Link>
              </article>
            )
          })}
        </section>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </section>
  )
}
