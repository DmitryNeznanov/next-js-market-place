"use client"
import SignupForm from "@/app/components/signupForm"
// import { Metadata } from "next"
import Link from "next/link"
// export const metadata: Metadata = {
//   title: "Sheen | Registration",
//   description: "Signup page",
// }
export default function SignupPage() {
  return (
    <>
      <article className="flex flex-col max-w-[23.563rem]">
        <h2 className="">Register an Account</h2>
        <p className="mt-[.5rem] lg:mt-[1rem] text-xl">
          Welcome to the Brilliance
        </p>
        <p className="mt-[.75rem] lg:mt-[1.5rem] ">
          Already have an account?{" "}
          <Link
            className="accent-underline"
            href="/login"
          >
            Sign in
          </Link>
        </p>
      </article>
      <div className="max-w-[20.875rem] lg:max-w-[26.875rem] w-full  mt-[2.5rem] md:mt-[2.2rem]">
        <SignupForm />
      </div>
    </>
  )
}
