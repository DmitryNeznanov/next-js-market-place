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
    <div className="flex flex-row gap-[1.5rem]">
      <div className="flex flex-col gap-[1.5rem] w-[20%]">
        {data.itemSlider.map((image, i) => {
          return (
            <div
              className="w-[10rem] h-[10rem]"
              key={i}
            >
              <Image
                className={`cursor-pointer w-full h-full  ${
                  index === i + 1 ? "" : ""
                }`}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                priority={true}
                onClick={() => {
                  updateIndex(i)
                  setSlide(i)
                }}
                id={`${`slide-${i + 1}`}`}
              />
            </div>
          )
        })}
      </div>
      <div className="w-[80%]">
        <Image
          className="w-full h-full"
          src={data.img.src}
          width={data.img.width}
          height={data.img.height}
          alt={data.img.alt}
          priority={true}
          id="currentSlide"
        />
      </div>
    </div>
  )
}
