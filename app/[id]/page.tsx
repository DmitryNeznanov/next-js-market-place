"use client"
import Image from "next/image"

export default function PortfolioPostPage() {
  return (
    <>
      <section className="lg:px-[5rem] desktop:px-[10rem]">
        <article>
          <h2>karina</h2>
          <p className="mt-[1.5rem]">photo</p>
          <Image
            className="mt-[1.5rem] lg:mt-[3rem]"
            src="/"
            height={0}
            width={0}
            alt="#"
          />
        </article>
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
                className="p-[1.1rem] mt-[2.3rem] lg:mt-[1.5rem] border-l-[3px] border-l-primary text-base text-gray-light"
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
      </section>
      <section className="mt-[3rem] lg:mt-[4.5rem]">
        <article className="lg:px-[5rem] desktop:px-[10rem]">
          <h2>Image galleries</h2>
          <p className="mt-[1.5rem] lg:mt-[2.5rem]">
            Here’s a really neat custom feature we added – galleries:
          </p>
        </article>
        <section className="mt-[2rem] lg:mt-[3rem] columns-1 md:columns-2 lg:columns-3 gap-x-[3.125rem]">
          {[
            ["/img-1.png", 380, 400, "img-1"],
            ["/img-2.png", 380, 285, "img-2"],
            ["/img-3.png", 380, 285, "img-3"],
            ["/img-4.png", 380, 285, "img-4"],
            ["/img-5.png", 380, 285, "img-5"],
            ["/img-6.png", 380, 500, "img-6"],
          ].map(([src, width, height, alt]: any) => {
            return (
              <Image
                className={`w-[${width}px] h-[${height}px] mb-[3.125rem] max-w-[999999rem] w-full inline-block`}
                src={src}
                width={width}
                height={height}
                alt={alt}
              ></Image>
            )
          })}
        </section>
      </section>
    </>
  )
}
