import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import salva from "@/public/salva.png";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sheen | About",
  description: "About page",
};
export default function About() {
  return (
    <section className="mx-auto max-w-[57rem]">
      <section>
        <h2 className="heading-2">About me</h2>
        <p className="mt-[2.2rem] text-base">
          I do what i love. If you’re interested in my work and what I do
          connect with me on the social networks.
        </p>
        <div className="mt-[2.4rem] mx-auto  max-w-[34.375rem] max-h-[28.125rem]">
          <Image
            className=""
            src={salva}
            alt="Salva_Gideon"
            priority={true}
          ></Image>
        </div>
      </section>
      <section className="mt-[2.4rem] lg:mt-[2.8rem]">
        <h3 className="heading-3 capitalize">salva gideon</h3>
        <div className="mt-[2.4rem] gap-y-[1rem] flex flex-col">
          {[
            [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl. Proin vitae urna eu sem pellentesque.",
            ],
            [
              "laoreet Mauris varius quam ut libero tempor rutrum. Sed quis maximus nunc. Nulla eu erat vel nunc consectetur ornare. Nam bibendum cursus viverra. Aenean placerat bibendum quam, eugiat elit tincidunt in.",
            ],
            [
              "Curabitur nec aliquet erat, et dictum nulla. eugiat elit tincidunt in. Curabitur nec aliquet erat, et dictum nulla.Sed quis maximus nunc. Nulla eu erat vel nunc consectetur ornare.Sed quis maximus nunc..",
            ],
          ].map(([text]) => (
            <p
              className="text-base"
              key={uuidv4()}
            >
              {text}
            </p>
          ))}
        </div>
      </section>
      <section className="mt-[1.7rem] lg:mt-[3rem]">
        <h3 className="heading-3">Features</h3>
        <p className="mt-[2.44rem] text-base">
          We’ve packed Sheen full of powerful features to help showcase your
          work:
        </p>
        <ul className="mt-[1rem]">
          {[
            ["Beautiful, minimal design"],
            ["Responsive"],
            ["Blog with pagination"],
            ["Unique ‘gallery’ feature for image grids and carousels"],
            ["Built-in contact form with Formspree integration"],
            ["-Social media icons"],
            ["Fast page rendering"],
            [
              "Customize everything – colors, spacing, fonts, sizes etc. – via a simple settings file",
            ],
          ].map(([text]) => (
            <li
              className="pl-[1.5rem] relative list-inside before:content-[url('../public/shapes/dot.svg')] dark:before:content-[url('../public/shapes/dot-dark.svg')] before:w-1 before:h-1 before:-ml-[.7rem] before:-m-1 before:absolute"
              key={uuidv4()}
            >
              <p className="text-base">{text}</p>
            </li>
          ))}
        </ul>
        <a
          className="button-primary inline-block mt-[1.5rem] lg:mt-[2.8rem]"
          href="/contact"
        >
          Conarct Me
        </a>
      </section>
    </section>
  );
}
