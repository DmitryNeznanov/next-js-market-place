"use client"
import Link from "next/link"
import { signup } from "@/app/actions/signup"
import { useFormState, useFormStatus } from "react-dom"

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined)
  const { pending } = useFormStatus()

  return (
    <section>
      <form action={action}>
        <div className="flex flex-col">
          <input
            className="input-primary"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          {state?.errors?.email && (
            <p className="mt-[1rem] text-error">{state.errors.email}</p>
          )}

          <input
            className="mt-[2rem] lg:mt-[4rem] input-primary"
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
          {state?.errors?.password && (
            <div>
              <p className="mt-[1rem] ">Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li
                    className="text-error"
                    key={error}
                  >
                    - {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="w-full mt-[4rem] button-primary"
            disabled={pending}
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
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
    </section>
  )
}
