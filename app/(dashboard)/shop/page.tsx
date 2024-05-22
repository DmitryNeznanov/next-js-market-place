import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "../../components/Filters"
import Link from "next/link"
import Item from "@/app/models/Item"
import { ErrorBoundary } from "next/dist/client/components/error-boundary"

export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
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

  const actualData: Item[] =
    searchParams.filters === undefined ? data : filteredData

  return (
    <section>
      <h2>Shop</h2>
      <Filters categories={itemsCategories} />
      <section
        className={`mt-[2rem] lg:mt-[4rem] gap-x-[3.125rem] ${
          actualData.length <= 4
            ? "columns-2"
            : "columns-1 sm:columns-2 lg:columns-3"
        }`}
      >
        <Suspense
          fallback={<h2 className="text-[4rem]/[4rem]">Items is loading!</h2>}
        >
          {actualData.map((item: Item) => {
            return (
              <article
                className="mb-[3.125rem] max-w-full w-full inline-block"
                key={item._id}
              >
                <Link
                  className="group"
                  href={`/shop/${item._id}`}
                >
                  {/* <Image
                    className="w-full"
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                    priority={true}
                  ></Image> */}
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
