import getPosts from "@/lib/getPosts"
import Image from "next/image"
export default async function BlogPage() {
  const rawData = await getPosts()
  const data = rawData.items
  return (
    <section>
      <h2>Blog</h2>
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-x-[3.125rem]">
        {data.map((post: Post) => {
          return (
            <article
              className="mb-[3.125rem] max-w-full w-full inline-block"
              key={post._id}
            >
              <Image
                className="w-full"
                src={post.img.src}
                width={post.img.width}
                height={post.img.height}
                alt={post.img.alt}
              ></Image>
              <h3 className="mt-[1.5rem]">{post.post}</h3>
              <div className="mt-[1.2rem] flex flex-row gap-x-[1.4rem] uppercase">
                <p>
                  <time dateTime="">{post.date}</time>
                </p>
                <div className="text-gray-light">/</div>
                <p>{post.categories}</p>
              </div>
            </article>
          )
        })}
      </section>
    </section>
  )
}
