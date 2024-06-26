"use client"

import { useState } from "react"

export default function Tabs({ data }: { data: Item }) {
  const [index, setIndex] = useState(1)

  function updateIndex(i: number) {
    setIndex(i + 1)
  }

  return (
    <>
      <div className="flex flex-row sm:gap-x-[6rem] border-b border-gray">
        {[
          ["description"],
          ["aditional information"],
          [`reviews(${data.reviews.length})`],
        ].map((tab, i) => {
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
        })}
      </div>
      {[
        [
          Array.from({ length: 1 }).map((_, i) => {
            return (
              <div
                className="flex flex-col gap-y-[1rem]"
                key={i}
              >
                {data.description.map((description, i) => {
                  return <p key={i}>{description.content}</p>
                })}
              </div>
            )
          }),
        ],
        [
          Array.from({ length: 1 }).map((_, i) => {
            return (
              <div
                className="flex flex-col sm:flex-row gap-y-[1rem] gap-x-[1rem]"
                key={i}
              >
                {data.information.map((information, i) => {
                  return <p key={i}>{information.content}</p>
                })}
              </div>
            )
          }),
        ],
        [
          Array.from({ length: 1 }).map((_, i) => {
            return (
              <div
                className=""
                key={i}
              >
                {data.reviews.map((review, i) => {
                  return (
                    <div key={i}>
                      <article>
                        <hgroup>
                          <h2 className="truncate first-letter:uppercase">
                            {review.name}
                          </h2>
                          <p className="inline-flex lowercase text-gray-light">
                            {review.email}
                          </p>
                          <div className="sm:ml-[1rem] mt-[.15rem] sm:mt-[0] flex sm:inline-flex flex-row gap-x-[.5rem]">
                            {Array.from({ length: 5 }).map((_, i) => {
                              return (
                                <svg
                                  width="15"
                                  height="14"
                                  viewBox="0 0 15 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  key={i}
                                >
                                  <path
                                    id="star"
                                    d="M14.1978 5.37003C14.1056 5.08655 13.8541 4.88585 13.5578 4.85904L9.51646 4.49214L7.91928 0.752815C7.80136 0.478091 7.53304 0.300781 7.23439 0.300781C6.93574 0.300781 6.66732 0.478091 6.55015 0.752815L4.95297 4.49214L0.910939 4.85904C0.614639 4.88638 0.363734 5.08709 0.27102 5.37003C0.178841 5.65352 0.263971 5.96445 0.488065 6.16099L3.54303 8.83976L2.64228 12.807C2.57637 13.0987 2.68959 13.4004 2.93163 13.5753C3.06173 13.6699 3.21458 13.7171 3.36797 13.7171C3.49977 13.7171 3.63169 13.682 3.7495 13.6115L7.23439 11.5278L10.7186 13.6115C10.9742 13.7643 11.2956 13.7503 11.5372 13.5753C11.7792 13.4004 11.8924 13.0987 11.8265 12.807L10.9258 8.83976L13.9807 6.16099C14.2047 5.96445 14.2899 5.65416 14.1978 5.37003Z"
                                    fill={`${
                                      i + 1 <= review.rating
                                        ? "gold"
                                        : "#FCFCFC"
                                    }`}
                                  />
                                </svg>
                              )
                            })}
                          </div>
                        </hgroup>
                        <p className="mt-[.5rem] max-w-[50rem] first-letter:uppercase">
                          {review.body}
                        </p>
                      </article>
                      <hr className="my-[2rem] border-gray last:hidden" />
                    </div>
                  )
                })}
              </div>
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
