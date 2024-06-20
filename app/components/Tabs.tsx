"use client"

import { useState } from "react"

export default function Tabs({ data }: { data: Item }) {
  const [index, setIndex] = useState(1)

  function updateIndex(i: number) {
    setIndex(i + 1)
  }

  return (
    <>
      <div>
        {[["description"], ["aditional information"]].map((tab, i) => {
          return (
            <button
              className="button-primary text-base capitalize"
              key={i}
              onClick={() => {
                updateIndex(i)
              }}
            >
              {tab}
            </button>
          )
        })}
      </div>
      {[[data.description], [data.aboutItem]].map((content, i) => {
        return (
          <section
            className={`${index === i + 1 ? "block" : "hidden"} `}
            key={i}
          >
            <p>{content}</p>
          </section>
        )
      })}
    </>
  )
}
