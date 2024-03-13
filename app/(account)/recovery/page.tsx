import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Sheen | Recovery",
  description: "Recovery page",
}

export default function page() {
  return (
    <>
      <article className="flex flex-col max-w-[23.563rem]">
        <h2 className=" capitalize">Lost Your Password?</h2>
        <p className="mt-[.5rem] lg:mt-[1rem] ">
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
        </p>
      </article>
      <form className="max-w-[26.875rem] w-full mt-[2.5rem] md:mt-[2.2rem]">
        <input
          className="input-primary w-full"
          placeholder="Email Address"
          type="mail"
          required
        />
        <input
          className="button-primary mt-[2rem] lg:mt-[4rem] w-full"
          type="button"
          value="Reset Password"
        />
      </form>
    </>
  )
}
