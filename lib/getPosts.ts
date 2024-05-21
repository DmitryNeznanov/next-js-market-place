export default async function getPosts() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/posts", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch posts")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading topics: ", error)
  }
}
