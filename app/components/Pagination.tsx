"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentPage = Number(params.get("page"))

  function setPage(i: number) {
    params.set("page", i.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <section>
      <div className="flex flex-row items-center justify-center gap-x-[.75rem]">
        {Array.from({ length: totalPages }).map((_, i) => {
          return (
            <button
              className={`text-base rounded-full size-[2.5rem]   ${
                currentPage === i + 1 ? "bg-accent" : "bg-[#252525]"
              } ${
                currentPage + 2 <= i || currentPage - 4 >= i
                  ? "hidden last:block first:block"
                  : ""
              }
              ${
                currentPage + 3 <= i || currentPage - 5 >= i
                  ? "first:mr-[.5rem] last:ml-[.5rem] first:after:content-['...'] last:before:content-['...']"
                  : ""
              }`}
              key={i}
              onClick={() => {
                setPage(i + 1)
              }}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
    </section>
  )
}
