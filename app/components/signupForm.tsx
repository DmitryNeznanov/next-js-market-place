"use client"
import Link from "next/link"
import { signup } from "@/app/actions/auth"
import { useFormState, useFormStatus } from "react-dom"

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined)
  return (
    <section>
      <form action={action}>
        <div className="flex flex-col gap-y-[2rem] lg:gap-y-[4rem]">
          <input
            className="input-primary"
            placeholder="Email Address"
            name="email"
            required
          />
          {state?.errors?.email && <p>{state.errors.email}</p>}
          <input
            className="input-primary"
            placeholder="Your Password"
            name="password"
            required
          />
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          <SubmitButton />
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
function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      className="w-full button-primary"
      disabled={pending}
      type="submit"
    >
      Sign Up
    </button>
  )
}
