"use client"
import Image from "next/image"
import { useState } from "react"

export default function ItemCarousel({ data }: { data: Item }) {
  const [index, setIndex] = useState(1)
  function setSlide() {}
  function test() {
    const test = document.getElementById("dev")
    console.log(test?.getAttribute("id"))
  }
  return (
    <div className="max-h-[31.25rem] grid grid-cols-[20%_80%] gap-[1.5rem] grid-rows-[25%_25%_25%_25%] grid-flow-col">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <Image
            className="w-full h-full last:row-span-4"
            key={i}
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
            onClick={test}
            id="test"
          />
        )
      })}
    </div>
  )
}
