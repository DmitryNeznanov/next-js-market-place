import DemoContent from "@/app/components/DemoContent"
import Post from "@/app/models/Post"
import getPosts from "@/lib/getPosts"
import { Types } from "mongoose"
import Image from "next/image"
import { Suspense } from "react"

export async function generateStaticParams() {
  const rawData = await getPosts()
  const data = rawData.items
  return data.map((post: Post) => {
    id: post._id
  })
}
export async function generateMetadata({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = await Post.findById(params.id)
  return {
    title: `Sheen | ${data.post}`,
    description: `This page has ${data._id} ID, and about ${data.name}'s post`,
  }
}
export default async function PostPage({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = await Post.findById(params.id)

  return (
    <section>
      <Suspense fallback={<h2 className="text-[4rem]">Post is loading!</h2>}>
        <article className="lg:mx-[5rem] desktop:mx-[10rem]">
          <h2 className="capitalize">{data.post}</h2>

          <div className="mt-[1.5rem] flex flex-row gap-x-[1.4rem] uppercase">
            <p>
              <time dateTime="">{data.date}</time>
            </p>
            <div className="text-gray-light">/</div>
            <div className="text-gray-light">/</div>
            <p>{data.categories}</p>
          </div>
          <Image
            className="mt-[1.5rem] lg:mt-[3rem] w-full max-h-[10rem] sm:max-h-[20.25rem] desktop:max-h-[31.25rem]"
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
          />
        </article>
      </Suspense>
      <div className="mt-[2.5rem] lg:mt-[4rem]">
        <DemoContent />
      </div>
    </section>
  )
}
