export default async function getItems() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/items", {
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
