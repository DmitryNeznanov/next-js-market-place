"use client"
import Link from "next/link"
import { signin } from "@/app/actions/signin"
import { useFormState, useFormStatus } from "react-dom"
export default function SigninForm() {
  const [state, action] = useFormState(signin, undefined)
  const { pending } = useFormStatus()
  return (
    <form
      className="max-w-[26.875rem] w-full mt-[2.5rem] md:mt-[2.2rem]"
      action={action}
    >
      <div className="flex flex-col">
        <input
          className="input-primary"
          placeholder="Email Address"
          type="email"
          name="email"
          required
        />
        {state?.errors?.email && (
          <p className="mt-[1rem] text-error">{state.errors.email}</p>
        )}
        <input
          className="mt-[2rem] lg:mt-[4rem] input-primary"
          placeholder="Your Password"
          type="password"
          name="password"
          required
        />
        <label className="mt-[1rem] lg:mt-[1.7rem] flex items-center gap-x-[.625rem] text-sm">
          <input type="checkbox" />
          Keep me logged in
        </label>
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
      </div>

      <button
        className="w-full mt-[4rem] button-primary"
        disabled={pending}
        type="submit"
      >
        Sign In
      </button>
      <Link
        className="mt-[.7rem] lg:mt-[1.5rem] block w-max mx-auto text-sm accent-underline"
        href="/recovery"
      >
        Forgot Password?
      </Link>
    </form>
  )
}
