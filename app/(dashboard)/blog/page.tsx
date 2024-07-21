import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import Link from "next/link"
import Post from "@/app/models/Post"
import Filters from "@/app/components/Filters"
import Pagination from "@/app/components/Pagination"
export const metadata: Metadata = {
  title: "Sheen | Blog",
  description: "Blog page",
}
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { filters: string; page: number }
}) {
  const filteredData = (await Post.find({
    categories: { $all: [`${searchParams.filters}`] },
  })) as Post[]
  const data = (await Post.find()) as Post[]

  const itemsPerPage = 4

  const currentPage = searchParams.page

  function paginate(data: any[]) {
    const maxValue = currentPage * itemsPerPage
    const minValue = maxValue - itemsPerPage
    const currentPageData = data.slice(minValue, maxValue)
    return currentPageData
  }

  const unsortedData: Post[] =
    searchParams.filters === undefined ? data : filteredData

  const currentData = paginate(unsortedData)
  const totalPages = Math.ceil(unsortedData.length / itemsPerPage)

  const blogCategories = ["digital", "image", "modern"]

  return (
    <section>
      <h2>Blog</h2>
      <div className="mt-[1.3rem] lg:mt-[4.6rem]">
        <Filters categories={blogCategories} />
      </div>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Posts is loading...</h2>}
      >
        <section className="flex-layout">
          {currentData.map((post: Post) => {
            return (
              <article
                className="sm:w-[44.55%]"
                key={post._id}
              >
                <Link
                  className="group"
                  href={`/blog/${post._id}`}
                >
                  <Image
                    className=" h-screen w-screen max-h-[18.75rem] lg:max-h-[25rem] xl:max-h-[32.75rem]"
                    src={post.img.src}
                    width={post.img.width}
                    height={post.img.height}
                    alt={post.img.alt}
                    priority={true}
                  ></Image>
                  <h3 className="mt-[1.5rem]">{post.title}</h3>
                  <div className="mt-[1.2rem] flex flex-row gap-x-[1.4rem] uppercase">
                    <p>
                      <time dateTime={`${post.date}`}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </p>
                    <div className="text-gray-light">/</div>
                    <p className="group-hover:accent-underline">
                      {post.categories}
                    </p>
                  </div>
                </Link>
              </article>
            )
          })}
        </section>
        <div className="mt-[3rem] lg:mt-[6rem]">
          <Pagination totalPages={totalPages} />
        </div>
      </Suspense>
    </section>
  )
}
