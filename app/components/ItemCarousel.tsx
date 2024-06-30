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

    const clickedSlideData: any = {
      srcset: clickedSlide?.getAttribute("srcset"),
      width: clickedSlide?.getAttribute("width"),
      height: clickedSlide?.getAttribute("height"),
      alt: clickedSlide?.getAttribute("alt"),
    }

    currentSlide?.setAttribute("srcset", clickedSlideData.srcset)
    currentSlide?.setAttribute("width", clickedSlideData.width)
    currentSlide?.setAttribute("height", clickedSlideData.height)
    currentSlide?.setAttribute("alt", clickedSlideData.alt)

    // for (const property in clickedSlideData) {
    //   if (Object.prototype.hasOwnProperty.call(clickedSlideData, property)) {
    //     currentSlide?.setAttribute(property, clickedSlide[property]) as HTMLAttributeReferrerPolicy
    //   }
    // }
  }

  return (
    <div
      // max-h-[28.25rem]
      className=" grid grid-cols-[20%_80%] gap-[.75rem] sm:gap-[1.5rem] grid-rows-[25%_25%_25%_25%] grid-flow-col"
    >
      {data.itemSlider.map((image, i) => {
        return (
          <Image
            className={`w-full h-full cursor-pointer ${
              index === i + 1 ? "border-[5px] border-accent box-border" : ""
            }`}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            priority={true}
            key={i}
            onClick={() => {
              updateIndex(i)
              setSlide(i)
            }}
            id={`${`slide-${i + 1}`}`}
          />
        )
      })}
      <Image
        className={`w-full h-full last:row-span-4 `}
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
