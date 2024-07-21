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

  const currentPage = searchParams.page

  function paginate(data: any[]) {
    const maxValue = currentPage * itemsPerPage
    const minValue = maxValue - itemsPerPage
    const currentPageData = data.slice(minValue, maxValue)
    return currentPageData
  }

  const unsortedData: Item[] =
    searchParams.filters === undefined ? data : filteredData

  const currentData = paginate(unsortedData)
  const totalPages = Math.ceil(unsortedData.length / itemsPerPage)

  return (
    <section>
      <h2>Shop</h2>
      <div className="mt-[1.3rem] lg:mt-[4.6rem]">
        <Filters categories={itemsCategories} />
      </div>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Items is loading...</h2>}
      >
        <section className="flex-layout">
          {currentData.map((item: Item) => {
            return (
              <article
                className="sm:w-[44.55%]"
                key={item._id}
              >
                <Link
                  className="group"
                  href={`/shop/${item._id}`}
                >
                  <Image
                    className=" h-screen w-screen max-h-[18.75rem] lg:max-h-[25rem] xl:max-h-[32.75rem]"
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
        <div className="mt-[3rem] lg:mt-[6rem]">
          <Pagination totalPages={totalPages} />
        </div>
      </Suspense>
    </section>
  )
}
