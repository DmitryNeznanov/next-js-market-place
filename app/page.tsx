import getPortfolio from "@/lib/getPortfolio"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "./components/Filters"
import Link from "next/link"
export const metadata: Metadata = {
  title: "Sheen | Home",
  description: "Home page",
}
export default async function HomePage() {
  const rawData = await getPortfolio()

  const data = rawData.items
  return (
    <section>
      <article className=" lg:text-center">
        <h1>Hello, I’m Salva Gideon.</h1>
        <p className="mt-[2rem] lg:mt-[4rem]">
          I’m a designer based in San Francisco.
        </p>
      </article>
      <div className="mt-[4.875rem] lg:mt-[8.875rem]">
        <Filters />
      </div>
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-x-[3.125rem]">
        <Suspense fallback={<h2>Items is loading!</h2>}>
          {data.map((item: any) => {
            return (
              <article
                className="mb-[3.125rem] max-w-[999999rem] w-full inline-block"
                key={item._id}
              >
                <Image
                  className="w-full"
                  src={item.img.src}
                  width={item.img.width}
                  height={item.img.height}
                  alt={item.img.alt}
                ></Image>
                <Link
                  href={`/portfolio/${item._id}`}
                  target="_blank"
                >
                  <h3 className="mt-[1.5rem] hover:accent-underline">
                    {item.name}
                  </h3>
                </Link>
                <p className="mt-[.75rem] italic text-gray-light">
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
