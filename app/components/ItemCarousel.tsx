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
    <div className="flex flex-col-reverse md:flex-row gap-[.50rem] sm:gap-[1rem]">
      <div className="flex flex-row md:flex-col justify-between">
        {data.itemSlider.map((image, i) => {
          return (
            <div
              className=""
              key={i}
            >
              <Image
                className={`cursor-pointer w-screen h-screen max-w-[4rem] sm:max-w-[8rem] max-h-[4rem] sm:max-h-[8rem]  ${
                  index === i + 1
                    ? "outline outline-[.75px] outline-accent outline-offset-4 "
                    : ""
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
      <div className="">
        <Image
          className="w-screen sm:h-screen sm:max-h-[34.375rem]"
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
