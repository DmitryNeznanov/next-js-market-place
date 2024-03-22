"use client"
import img2 from "@/public/img-2.png"
import img5 from "@/public/img-5.png"
import carousel1 from "@/public/caruosel.png"
import Image from "next/image"
import { useState } from "react"

export default function Carousel() {
  const [slide, setSlide] = useState(0)

  function handleClick(i: any) {
    setSlide(i)
  }

  const data = [
    [carousel1, "img1"],
    [img2, "img2"],
    [img5, "img3"],
  ]
  return (
    <section>
      <div id="carousel">
        <section>
          {data.map(([src, alt]: any, i) => {
            return (
              <div
                className={`transition-[opacity] duration-1000 ${
                  slide === i ? "opacity-100" : "h-[0px] w-[0px] opacity-0"
                }`}
                key={i}
              >
                <Image
                  className="max-h-[7.259rem] sm:max-h-[20rem] lg:max-h-[31.25rem] h-full w-full"
                  src={src}
                  alt={alt}
                ></Image>
              </div>
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
