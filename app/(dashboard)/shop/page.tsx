import getItems from "@/lib/getItems"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Filters from "../../components/Filters"
export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

export default async function ShopPage() {
  const rawData = await getItems()

  const data = rawData.items

  return (
    <section className="">
      <h2>Shop</h2>
      <Filters />
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
