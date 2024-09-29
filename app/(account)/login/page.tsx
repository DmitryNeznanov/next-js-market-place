import SigninForm from "@/app/components/SigninForm"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sheen | Login",
  description: "Login page",
}

export default function LoginPage() {
  return (
    <>
      <article className="flex flex-col max-w-[23.563rem]">
        <h2 className="">Welcome back</h2>
        <p className="mt-[.5rem] lg:mt-[1rem] text-xl">
          Enter your email and password to sign in to the website.
        </p>
        <p className="mt-[.7rem] lg:mt-[1.5rem] text-sm">
          Not signed up yet?{" "}
          <Link
            className="accent-underline"
            href="/signup"
          >
            Sign up
          </Link>
        </p>
      </article>
      <SigninForm />
    </>
  )
}
