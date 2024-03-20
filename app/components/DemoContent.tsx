"use client"
import Image from "next/image"

import img1 from "@/public/img-1.png"
import img2 from "@/public/img-2.png"
import img3 from "@/public/img-3.png"
import img4 from "@/public/img-4.png"
import img5 from "@/public/img-5.png"
import img6 from "@/public/img-6.png"
import Carousel from "./Carousel"
export default function DemoContent() {
  return (
    <section>
      <div className="lg:mx-[5rem] desktop:mx-[10rem]">
        <article className="pb-[3rem] lg:pb-[6rem]">
          <h3>Demo content</h3>
          <div className="mt-[2.5rem] flex flex-col gap-y-[.3rem] lg:gap-y-[.5rem]">
            <p>
              This page is a demo that shows everything you can do inside
              portfolio and blog posts.
            </p>
            <p>
              We’ve included everything you need to create engaging posts about
              your work, and show off your case studies in a beautiful way.
            </p>
            <p>
              Obviously, we’ve styled up all the basic text formatting options
              available in markdown.
            </p>
            <p>You can create lists:</p>
            <ul>
              {[["Simple bulleted lists"], ["Like this one"], ["Are cool"]].map(
                (text, index) => {
                  return (
                    <li
                      className="li-dot"
                      key={index}
                    >
                      <p>{text}</p>
                    </li>
                  )
                }
              )}
            </ul>
            <p>And:</p>
            <ol className="text-base list-decimal ">
              {[
                ["Numbered lists"],
                ["Like this other one"],
                ["re great too"],
              ].map((text, index) => {
                return (
                  <li
                    className="li-ol"
                    key={index}
                  >
                    {text}
                  </li>
                )
              })}
            </ol>
            <p className="flex flex-col">
              You can also add blockquotes, which are shown at a larger width to
              help break up the layout and draw attention to key parts of your
              content:
              <q
                className="p-[1.1rem] mt-[2.3rem] lg:mt-[1.5rem] border-l-[3px] border-l-primary text-base text-gray-light italic "
                cite="https://google.com"
              >
                The longer I live, the more I realize that I am never wrong
                about anything, and that all the pains I have so humbly taken to
                verify my notions have only wasted my time!
              </q>
            </p>
          </div>
        </article>
        <hr className="w-full h-[2px] bg-gray-light" />
        <article className="mt-[2.5rem] lg:mt-[4.5rem]">
          <h2>Image galleries</h2>
          <p className="mt-[1.5rem] lg:mt-[2.5rem]">
            Here’s a really neat custom feature we added – galleries:
          </p>
        </article>
      </div>
      <section className="pb-[.5rem] lg:pb-[2.150rem] mt-[2rem] lg:mt-[3rem] columns-1 md:columns-2 lg:columns-3 gap-x-[3.125rem]">
        {[
          [img1, "img-1"],
          [img2, "img-2"],
          [img3, "img-3"],
          [img4, "img-4"],
          [img5, "img-5"],
          [img6, "img-6"],
        ].map(([src, alt]: any, i) => {
          return (
            <Image
              className="hidden mb-[2.5rem] md:mb-[3.125rem] w-full first:block [&:nth-child(2)]:block md:inline-block"
              src={src}
              alt={alt}
              key={i}
            ></Image>
          )
        })}
      </section>
      <hr className="lg:mx-[5rem] desktop:mx-[10rem] h-[2px] bg-gray-light" />
      <section className="mt-[3rem] lg:mt-[4.4rem]">
        <article className="lg:mx-[5rem] desktop:mx-[10rem]">
          <h2>Image carousels</h2>
          <p className="mt-[1.5rem] lg:mt-[2.5rem]">
            Here’s another gallery with only one column, which creates a
            carousel slide-show instead.
          </p>
          <p className="mt-[.5rem]">
            A nice little feature: the carousel only advances when it is in
            view, so your visitors won’t scroll down to find it half way through
            your images.
          </p>
        </article>
        <div className="mt-[3rem]">
          <Carousel />
        </div>
      </section>
      <section className="mt-[3rem] lg:mt-[6.725rem]">
        <article className="lg:mx-[5rem] desktop:mx-[10rem]">
          <h2>What about videos?</h2>
          <p className="mt-[1.5rem] lg:mt-[2.5rem]">
            Videos are an awesome way to show off your work in a more engaging
            and personal way, and we’ve made sure they work great on our themes.
            Just paste an embed code from YouTube or Vimeo, and the theme makes
            sure it displays perfectly:
          </p>
        </article>
        <video
          className="mt-[3rem] w-full max-h-[7.259rem] sm:max-h-[20rem] lg:max-h-[31.25rem]"
          src="/video/video.mp4"
          poster="/poster.png"
          controls
          muted
        ></video>
      </section>
    </section>
  )
}
