import getPosts from "@/lib/getPosts"
export default async function BlogPage() {
  const rawData = await getPosts()
  const data = rawData.items
  return (
    <section>
      {data.map((post: any) => {
        return (
          <article key={post._id}>
            <h3 key={post._id}>{post.post}</h3>
          </article>
        )
      })}
    </section>
  )
}
