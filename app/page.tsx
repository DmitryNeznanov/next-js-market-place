import getPortfolio from "@/lib/getPortfolio"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "./components/Filters"
import Link from "next/link"
import Portfolio from "@/app/models/Portfolio"
export const metadata: Metadata = {
  title: "Sheen | Home",
  description: "Home page",
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const filterQuery = searchParams.filters

  const rawData = await getPortfolio()
  const data: PortfolioItem[] = rawData.items

  const filteredData = await Portfolio.find({ categories: [`${filterQuery}`] })

  const itemCategories = ["photo", "photography"]

  const actualData = filterQuery === undefined ? data : filteredData

  return (
    <section>
      <article className="lg:text-center">
        <h1>Hello, I’m Salva Gideon.</h1>
        <p className="mt-[2rem] lg:mt-[4rem]">
          I’m a designer based in San Francisco.
        </p>
      </article>
      <div className="mt-[4.875rem] lg:mt-[8.875rem]">
        <Filters categories={itemCategories} />
      </div>
      <section className="mt-[2rem] lg:mt-[4rem] columns-1 sm:columns-2 lg:columns-3 gap-x-[3.125rem]">
        <Suspense fallback={<h2 className="text-[4rem]">Items is loading!</h2>}>
          {actualData.map((item: PortfolioItem) => {
            return (
              <article
                className="mb-[3.125rem] max-w-full w-full inline-block"
                key={item._id}
              >
                <Link
                  className="group"
                  href={`/portfolio/${item._id}`}
                >
                  <Image
                    className="w-full"
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                  ></Image>
                  <h3 className="mt-[1.5rem] group-hover:accent-underline">
                    {item.name}
                  </h3>
                </Link>
                <p className="mt-[.75rem] italic text-gray-light capitalize">
                  {item.categories}
                </p>
              </article>
            )
          })}
        </Suspense>
      </section>
    </section>
  )
}
