"use client"
import img3 from "@/public/img-3.png"
import img2 from "@/public/img-2.png"
import img5 from "@/public/img-5.png"
import carousel1 from "@/public/caruosel.png"
import Image from "next/image"
import { useState } from "react"

export default function Carousel() {
  const [slide, setSlide] = useState(0)

  function handleClick(i: any) {
    setSlide(i)

    const carousel = document.getElementById("carousel") as HTMLDivElement
    carousel?.scroll({
      top: 0,
      left:
        slide === i
          ? undefined
          : slide > i
          ? -carousel.offsetWidth
          : carousel.offsetWidth,
      behavior: "smooth",
    })
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
                className={`${slide === i ? "block" : "hidden"}`}
                key={i}
              >
                <Image
                  className="max-h-[500px] w-full"
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
              id="controls"
              key={i}
            ></button>
          )
        })}
      </section>
    </section>
  )
}
