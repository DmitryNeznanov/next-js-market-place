import { Metadata } from "next"
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
    <section>
      {data.map((item: any) => {
        return (
          <h2
            key={item._id}
            className="text-base"
          >
            {item.item}
          </h2>
        )
      })}
    </section>
  )
}
