"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Filters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleFilter(category: string) {
    const params = new URLSearchParams(searchParams)
    params.set("filters", category)
    replace(`${pathname}?${params.toString().toLowerCase()}`)
  }
  const itemsCategories = [
    "Technology",
    "Interface Design",
    "Art",
    "Modern",
    "Product",
    "Feature",
  ]
  return (
    <section>
      <button className="ml-auto flex flex-row gap-x-[.155rem] justify-end">
        <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
        <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
        <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
      </button>
      <h3 className="mt-[2.5rem] text-base text-gray-light uppercase">
        filters
      </h3>
      <ul className="mt-[2.5rem] flex flex-row gap-x-[4rem]">
        {itemsCategories.map((category, index) => {
          return (
            <li
              className="text-base"
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
  )
}
