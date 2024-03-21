export default async function getPortfolio() {
  try {
    const res = await fetch("http://localhost:3000/api/Portfolio", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch portfolio")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading topics: ", error)
  }
}
