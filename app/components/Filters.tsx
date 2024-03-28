"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Filters({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const router = useRouter()
  const pathname = usePathname()
  const { replace } = useRouter()

  const filter = params.get("filters")

  function handleFilter(category: string) {
    category === filter
      ? params.delete("filters")
      : params.set("filters", category)

    replace(`${pathname}?${params.toString().toLowerCase()}`)
  }

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
      <ul className="mt-[2.5rem] flex flex-row gap-x-[4rem] capitalize">
        {categories.map((category: string, index: number) => {
          return (
            <li
              className={`text-base ${
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
  )
}
