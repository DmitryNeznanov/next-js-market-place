export default async function getPortfolio() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/portfolios", {
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
