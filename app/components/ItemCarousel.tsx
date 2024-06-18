"use client"
import Image from "next/image"
import { useState } from "react"

export default function ItemCarousel({ data }: { data: Item }) {
  const [index, setIndex] = useState(1)

  function setSlide(i: number) {
    setIndex(i + 1)

    const carousel = document.getElementById("carousel")
    const currentSlide = document.getElementById("currentSlide")
    const clickedSlide = document.getElementById(`slide-${i}`)
    carousel?.replaceChild(clickedSlide, currentSlide)

    // const clone = test?.cloneNode(true)
    // carousel?.removeChild(currentSlide)
    // carousel?.appendChild(clone)
  }
  return (
    <div
      className="max-h-[31.25rem] grid grid-cols-[20%_80%] gap-[1.5rem] grid-rows-[25%_25%_25%_25%] grid-flow-col"
      id="carousel"
    >
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Image
            className={`w-full h-full ${
              index === i + 1 ? "border-[5px] border-accent" : ""
            }`}
            key={i}
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
            onClick={() => {
              setSlide(i)
            }}
            priority={true}
            // id={`${index === i + 1 ? "currentSlide" : `slide-${i + 1}`}`}

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
        // id="currentSlide"
      />
    </div>
  )
}
