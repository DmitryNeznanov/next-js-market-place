import getPortfolio from "@/lib/getPortfolio"
import DemoContent from "../../components/DemoContent"
import Portfolio from "@/app/models/Portfolio"
import Image from "next/image"
import { Types } from "mongoose"
import { Suspense } from "react"
export async function generateStaticParams() {
  const rawData = await getPortfolio()
  const data: PortfolioItem[] = rawData.items
  return data.map((item: PortfolioItem) => {
    id: item._id
  })
}
export async function generateMetadata({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = await Portfolio.findById(params.id)
  return {
    title: `Sheen | ${data.name}'s page`,
    description: `This page has ${data._id} ID, and about ${data.name} work`,
  }
}
export default async function PortfolioPostPage({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = await Portfolio.findById(params.id)

  return (
    <>
      <Suspense fallback={<h2 className="text-[4rem]">Item is loading!</h2>}>
        <article className="lg:mx-[5rem] desktop:mx-[10rem]">
          <h2 className="capitalize">{data.name}</h2>
          <p className="mt-[1.5rem] text-gray-light italic capitalize">
            {data.categories}
          </p>
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
    </>
  )
}
