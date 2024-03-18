"use client"
import img3 from "@/public/img-3.png"
import img2 from "@/public/img-2.png"
import img5 from "@/public/img-5.png"
import Image from "next/image"
import { useState } from "react"

export default function Carousel() {
  const [slide, setSlide] = useState(0)

  function handleClick(i: any) {
    setSlide(i)
  }
  const data = [
    [img2, "img1"],
    [img5, "img2"],
    [img3, "img3"],
  ]
  return (
    <section>
      <div className={`relative h-[500px] w-full overflow-hidden $`}>
        <section className="flex absolute">
          {data.map(([src, alt]: any, i) => {
            return (
              <>
                <Image
                  className="h-[500px] w-full"
                  src={src}
                  alt={alt}
                  key={i}
                ></Image>
              </>
            )
          })}
        </section>
      </div>
      <section className="mt-[1.5rem] lg:mt-[2.4rem] flex flex-row justify-center gap-x-[.78rem]">
        {data.map((_, i) => {
          return (
            <button
              className={`w-[1rem] h-[1rem] rounded-full ${
                slide === i ? "bg-accent" : "bg-gray-light"
              }`}
              onClick={() => {
                handleClick(i)
              }}
              key={i}
            ></button>
          )
        })}
      </section>
    </section>
  )
}
