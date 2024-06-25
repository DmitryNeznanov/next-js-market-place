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
      {[
        [
          // data.description.map((content, i) => {
          //   return <p key={i}>{content}</p>
          // }),
        ],
        [
          // data.information.map((content, i) => {
          //   return <p key={i}>{content}</p>
          // }),
        ],
        [
          data.reviews.map((review, i) => {
            return (
              <article key={i}>
                <hgroup>
                  <h2>{review.name}</h2>
                  <p>{review.email}</p>
                  <p>{review.rating}</p>
                </hgroup>
                <p>{review.body}</p>
              </article>
            )
          }),
        ],
      ].map((content, i) => {
        return (
          <section
            className={`pt-[1.5rem] lg:pt-[3.4rem] ${
              index === i + 1 ? "block" : "hidden"
            } `}
            key={i}
          >
            {content}
          </section>
        )
      })}
    </>
  )
}
