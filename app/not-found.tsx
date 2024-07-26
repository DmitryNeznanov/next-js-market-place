import Link from "next/link"
import Links from "./components/Links"
export default function NotFound() {
  return (
    <section className="flex flex-col items-center text-center">
      <article>
        <h2 className="text-[12.5rem]/[12.5rem] font-josefinSans text-gray">
          404
        </h2>
        <p>
          <span className="heading-2 text-gray-light">Oops! </span> we are
          sorry, but the page you requested was not found.
        </p>
        <div>
          <Link
            className="mt-[2.4rem] inline-block button-primary"
            href="/"
          >
            go home
          </Link>
        </div>
      </article>
      <div className="mt-[1.5rem]">
        <Links />
      </div>
    </section>
  )
}
