import { Metadata } from "next"
import Image from "next/image"
export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

async function getItems() {
  try {
    const res = await fetch("http://localhost:3000/api/Item", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch items")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading topics: ", error)
  }
}

export default async function ShopPage() {
  const rawData = await getItems()
  const data = rawData.items

  return (
    <section className="">
      <h2>Shop</h2>
      <section className="mt-[1.875rem] columns-1 md:columns-2 lg:columns-3 gap-x-[3.125rem]">
        {data.map((item: any) => {
          return (
            <article
              className="max-w-[999999rem] w-full inline-block"
              key={item._id}
            >
              <Image
                className="w-full"
                src={item.img.src}
                alt={item.img.alt}
                width={item.img.width}
                height={item.img.height}
              ></Image>
              <h3 className="mt-[1.25rem] lg:mt-[1.5rem]">{item.item}</h3>
              <p className="mt-[1rem] lg:mt-[1.25rem]">${item.price}</p>
            </article>
          )
        })}
      </section>
    </section>
  )
}
