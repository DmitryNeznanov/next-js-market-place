import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Sheen | Shop",
  description: "Shop page",
}

const getItems = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Item", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch topics")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading topics: ", error)
  }
}

export default function ShopPage() {
  const data = getItems()
  return <section></section>
}
