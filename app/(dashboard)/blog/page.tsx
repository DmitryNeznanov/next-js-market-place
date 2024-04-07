import getPosts from "@/lib/getPosts"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sheen | Blog",
  description: "Blog page",
}
export default async function BlogPage() {
  const rawData = await getPosts()
  const data = rawData.items
  return (
    <section>
      <h2>Blog</h2>
      <section className="mt-[2.3rem] lg:mt-[4.3rem] columns-1 sm:columns-2 lg:columns-3 gap-x-[3.125rem]">
        <Suspense fallback={<h2 className="text-[4rem]">Posts is loading!</h2>}>
          {data.map((post: Post) => {
            return (
              <article
                className="mb-[3.125rem] max-w-full w-full inline-block"
                key={post._id}
              >
                <Link
                  className="group"
                  href={`/blog/${post._id}`}
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
                    <p className="accent-underline group-hover:no-underline">
                      {post.categories}
                    </p>
                  </div>
                </Link>
              </article>
            )
          })}
        </Suspense>
      </section>
    </section>
  )
}
