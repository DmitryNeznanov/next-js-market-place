"use client"
import Image from "next/image"
import { useState } from "react"

export default function ItemCarousel({ data }: { data: Item }) {
  const [index, setIndex] = useState(1)

  function updateIndex(i: number) {
    setIndex(i + 1)
  }

  function setSlide(i: number) {
    const currentSlide = document.getElementById("currentSlide")
    const clickedSlide = document.getElementById(`slide-${i + 1}`)
    const clickedSlideData: any = [
      clickedSlide?.getAttribute("src"),
      clickedSlide?.getAttribute("width"),
      clickedSlide?.getAttribute("height"),
      clickedSlide?.getAttribute("alt"),
    ]

    const [src, width, height, alt] = clickedSlideData

    currentSlide?.setAttribute("src", src)
    currentSlide?.setAttribute("width", width)
    currentSlide?.setAttribute("height", height)
    currentSlide?.setAttribute("alt", alt)
  }
  return (
    <div
      // max-h-[31.25rem]
      className="grid grid-cols-[20%_80%] gap-[1.5rem] grid-rows-[25%_25%_25%_25%] grid-flow-col"
      id="carousel"
    >
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Image
            className={`w-full h-full ${
              index === i + 1 ? "border-[5px] border-accent box-border" : ""
            }`}
            key={i}
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
            priority={true}
            onClick={() => {
              updateIndex(i)
              setSlide(i)
            }}
            id={`${`slide-${i + 1}`}`}
          />
        )
      })}
      <Image
        className="w-full h-full last:row-span-4"
        src={data.img.src}
        width={data.img.width}
        height={data.img.height}
        alt={data.img.alt}
        priority={true}
        id="currentSlide"
      />
    </div>
  )
}
