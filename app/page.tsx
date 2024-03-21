import getPortfolio from "@/lib/getPortfolio"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sheen | Home",
  description: "Home page",
}
export default async function HomePage() {
  const rawData = await getPortfolio()

  const data = rawData.items
  return (
    <section>
      <h1>Hello, I’m Salva Gideon.</h1>
      {data.map((item: any) => {
        return (
          <article key={item._id}>
            <Image
              src={item.img.src}
              width={item.img.width}
              height="200"
              alt={item.img.alt}
            ></Image>
          </article>
        )
      })}
    </section>
  )
}
