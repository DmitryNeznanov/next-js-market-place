export default async function getItems() {
  try {
    const res = await fetch("http://localhost:3000/api/items", {
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
