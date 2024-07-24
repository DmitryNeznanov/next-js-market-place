import DemoContent from "@/app/components/DemoContent"
import Links from "@/app/components/Links"
import Post from "@/app/models/Post"
import { Types } from "mongoose"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
export async function generateStaticParams() {
  const data = (await Post.find()) as Post[]
  return data.map((post: Post) => {
    id: post._id
  })
}
export async function generateMetadata({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = (await Post.findById(params.id)) as Post
  return {
    title: `Sheen | ${data.title}`,
    description: `This page has ${data._id} ID`,
  }
}
export default async function PostPage({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = (await Post.findById(params.id)) as Post
  return (
    <section>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Post is loading...</h2>}
      >
        <article className="lg:mx-[5rem] desktop:mx-[10rem]">
          <hgroup className="mt-[1.5rem] uppercase">
            <h2 className="capitalize">{data.title}</h2>
            <div className="mt-[1.2rem] flex flex-row gap-x-[1.4rem] ">
              <p>
                <time dateTime={`${data.date}`}>
                  {new Date(data.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
              <span className="text-gray-light">/</span>
              <p>
                {data.categories.map((category, i) => {
                  return (
                    <span
                      className="inline"
                      key={i}
                    >
                      <Link
                        href={`/blog?page=1&filters=${category}`}
                        className="accent-underline hover:no-underline"
                      >
                        {category}
                      </Link>
                      <span>&nbsp;</span>
                    </span>
                  )
                })}
              </p>
            </div>
          </hgroup>
          <Image
            className="mt-[1.5rem] lg:mt-[3rem] w-full max-h-[10rem] sm:max-h-[20.25rem] desktop:max-h-[31.25rem]"
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
            priority={true}
          />
        </article>
      </Suspense>
      <div className="mt-[2.5rem] lg:mt-[4rem]">
        <DemoContent />
      </div>
      <div className="mt-[3.75rem] lg:mt-[5.75rem]">
        <p className="uppercase">
          tags:&ensp;
          {data.categories.map((category, i) => {
            return (
              <span
                className="inline"
                key={i}
              >
                <Link
                  href={`/blog?page=1&filters=${category}`}
                  className="accent-underline hover:no-underline"
                >
                  {category}
                </Link>
                <span>&emsp;</span>
              </span>
            )
          })}
        </p>
        <div className="mt-[1rem] lg:mt-[2rem] flex flex-row">
          <p className="uppercase">share:</p>
          <div className="ml-[1.7rem]">
            <Links />
          </div>
        </div>
      </div>
    </section>
  )
}
