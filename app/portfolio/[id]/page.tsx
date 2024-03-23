import getPortfolio from "@/lib/getPortfolio"
import getPortfolioItem from "@/lib/getPortfolioItem"
import DemoContent from "../../components/DemoContent"

export async function generateStaticParams() {
  const rawData = await getPortfolio()
  const data = rawData.items

  return data.map((item: any) => {
    id: item._id
  })
}

export default async function PortfolioPostPage({ params }: any) {
  const data = await getPortfolioItem(params)
  console.log(data)

  return (
    <>
      <article className="lg:mx-[5rem] desktop:mx-[10rem]">
        <h2>karina</h2>
        <p className="mt-[1.5rem]">photo</p>
        {/* <Image
            className="mt-[1.5rem] lg:mt-[3rem]"
            src="/"
            height={0}
            width={0}
            alt="#"
          /> */}
      </article>
      <DemoContent />
    </>
  )
}
