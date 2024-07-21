"use client"

import BackToTopButton from "./BackToTopButton"
import Links from "./Links"

export default function Footer() {
  return (
    <footer className="bg-background">
      <BackToTopButton />
      <div className="container pb-[2.8rem] md:pb-[4rem] xl:pb-[5.8rem] flex flex-col items-center gap-y-[1.5rem] text-center relative">
        <p className="text-xl">Brilliance, a creative portfolio theme</p>
        <p className="text-gray-light  md:mt-[.4rem]">
          &copy; 2022.Brilliance, made by
          <a
            className="text-accent"
            href="https://vitathemes.com/"
            target="_blank"
          >
            {" "}
            VitaThemes
          </a>
        </p>
        <Links />
      </div>
    </footer>
  )
}
