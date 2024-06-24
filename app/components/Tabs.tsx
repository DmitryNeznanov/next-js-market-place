"use client"

import { useState } from "react"

export default function Tabs({ data }: { data: Item }) {
  const [index, setIndex] = useState(1)

  function updateIndex(i: number) {
    setIndex(i + 1)
  }

  return (
    <>
      <div className="flex flex-row  sm:gap-x-[6rem] border-b border-gray">
        {[["description"], ["aditional information"], ["reviews(0)"]].map(
          (tab, i) => {
            return (
              <button
                className={`pb-[2rem] text-base capitalize border-b -mb-[1px] ${
                  index === i + 1
                    ? "border-primary"
                    : "border-gray text-gray-light"
                }`}
                key={i}
                onClick={() => {
                  updateIndex(i)
                }}
              >
                {tab}
              </button>
            )
          }
        )}
      </div>
      {[[data.description], [data.information]].map((content, i) => {
        return (
          <section
            className={`pt-[1.5rem] lg:pt-[3.4rem] ${
              index === i + 1 ? "block" : "hidden"
            } `}
            key={i}
          >
            <p>{content}</p>
          </section>
        )
      })}
    </>
  )
}
