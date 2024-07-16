import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "./components/Filters"
import Link from "next/link"
import Portfolio from "./models/Portfolio"

export const metadata: Metadata = {
  title: "Sheen | Home",
  description: "Home page",
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data = (await Portfolio.find()) as Portfolio[]

  const filteredData = (await Portfolio.find({
    categories: { $all: [`${searchParams.filters}`] },
  })) as Portfolio[]

  const itemCategories: string[] = ["photo", "photography"]

  const actualData: Portfolio[] =
    searchParams.filters === undefined ? data : filteredData

  return (
    <section>
      <article className="lg:text-center">
        <h1>Hello, I’m Salva Gideon.</h1>
        <p className="mt-[2rem] lg:mt-[4rem]">
          I’m a designer based in San Francisco.
        </p>
      </article>
      <div className="mt-[1.3rem] lg:mt-[4.6rem]">
        <Filters categories={itemCategories} />
      </div>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Items is loading...</h2>}
      >
        <section className="flex-layout">
          {actualData.map((item: Portfolio) => {
            return (
              <article
                className="sm:w-[44.55%]"
                key={item._id}
              >
                <Link
                  className="group"
                  href={`/portfolio/${item._id}`}
                >
                  <Image
                    className=" h-screen w-screen max-h-[18.75rem] lg:max-h-[25rem] xl:max-h-[32.75rem]"
                    src={item.img.src}
                    width={item.img.width}
                    height={item.img.height}
                    alt={item.img.alt}
                    priority={true}
                  ></Image>
                  <h3 className="mt-[1.5rem] group-hover:accent-underline">
                    {item.name}
                  </h3>
                  <p className="mt-[.75rem] italic text-gray-light capitalize">
                    {item.categories}
                  </p>
                </Link>
              </article>
            )
          })}
        </section>
        <div className="mt-[3rem] lg:mt-[6rem]">
          {/* <Pagination totalPages={totalPages} /> */}
        </div>
      </Suspense>
    </section>
  )
}
