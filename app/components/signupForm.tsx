"use client"
import Link from "next/link"
import { signup } from "@/app/actions/auth"

export default function SignupForm() {
  return (
    <form action={signup}>
      <div className="flex flex-col gap-y-[2rem] lg:gap-y-[4rem]">
        <input
          className="input-primary"
          placeholder="Email Address"
          type="email"
          name="email"
          required
        />
        <input
          className="input-primary"
          placeholder="Your Password"
          type="password"
          name="password"
          required
        />
      </div>
      <button
        className="w-full mt-[2rem] lg:mt-[4rem] button-primary"
        type="submit"
      >
        Sign Up
      </button>
      <p className="max-w-[17.375rem] mt-[1.5rem] lg:mt-[3rem] mx-auto text-center text-sm">
        By creating an account, you agree to the{" "}
        <Link
          className="accent-underline"
          href="#"
        >
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link
          className="accent-underline"
          href="#"
        >
          Privacy Policy.
        </Link>
      </p>
    </form>
  )
}
