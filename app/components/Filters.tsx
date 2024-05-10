"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Filters({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const filter = params.get("filters")

  function handleFilter(category: string) {
    category === filter
      ? params.delete("filters")
      : params.set("filters", category)

    replace(`${pathname}?${params.toString().toLowerCase()}`)
  }
  function handleClick() {
    const filters = document.getElementById("filters") as HTMLDivElement
    const buttonChild = document.getElementById("buttonChild") as HTMLDivElement
    filters.classList.toggle("max-h-0")
    filters.classList.toggle("max-h-screen")
    buttonChild.classList.toggle("-mt-[.4rem]")
  }
  return (
    <section>
      <button
        className="ml-auto -my-[.8rem] -mx-[.3rem] py-[.8rem] px-[.3rem] relative z-10 flex flex-row gap-x-[.155rem] justify-end"
        onClick={() => {
          handleClick()
        }}
      >
        <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
        <div
          className="w-[5px] h-[5px] bg-primary transition-[margin] rounded-full"
          id="buttonChild"
        ></div>
        <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
      </button>
      <section
        className="max-h-0 transition-[max-height] overflow-hidden"
        id="filters"
      >
        <h3 className="mt-[1.5rem] lg:mt-[2.5rem] text-base text-gray-light uppercase">
          filters
        </h3>
        <ul className="mt-[1rem] lg:mt-[2.5rem] flex flex-row gap-x-[2rem] lg:gap-x-[4rem] capitalize">
          {categories.map((category: string, index: number) => {
            return (
              <li
                className={`text-base cursor-pointer ${
                  filter === category ? "text-primary" : "text-gray-light"
                }`}
                onClick={() => {
                  handleFilter(category.toLowerCase())
                }}
                key={index}
              >
                {category}
              </li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}
