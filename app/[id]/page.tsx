import Image from "next/image"

export default function PortfolioPostPage() {
  return (
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
      <article>
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
              className="p-[1.1rem] mt-[2.3rem] lg:mt-[1.5rem] border-l-[3px] border-l-primary  text-base text-gray-light"
              cite="https://google.com"
            >
              The longer I live, the more I realize that I am never wrong about
              anything, and that all the pains I have so humbly taken to verify
              my notions have only wasted my time!
            </q>
          </p>
        </div>
      </article>
    </section>
  )
}
