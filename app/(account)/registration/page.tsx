import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
  title: "Sheen | Registration",
  description: "Registration page",
}

export default function RegistrationPage() {
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
      <form
        className="max-w-[20.875rem] lg:max-w-[26.875rem] w-full mt-[2.5rem] md:mt-[2.2rem]"
        method="post"
      >
        <div className="flex flex-col gap-y-[2rem] lg:gap-y-[4rem]">
          <input
            className="input-primary"
            placeholder="Email Address"
            type="email"
            required
          />
          <input
            className="input-primary"
            placeholder="Your Password"
            type="password"
            required
          />
        </div>
        <input
          className="w-full mt-[2rem] lg:mt-[4rem] button-primary"
          type="submit"
          value="Sign in"
        />
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
    </>
  )
}
