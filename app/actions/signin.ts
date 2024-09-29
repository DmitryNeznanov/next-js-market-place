"use server"
import { FormState, definations } from "../lib/definations"
import User from "@/app/models/User"
import { createSession } from "../lib/session"
import { redirect } from "next/navigation"
export async function signin(state: FormState, formData: FormData) {
  const validatedFeilds = definations.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })
  if (!validatedFeilds.success) {
    return {
      errors: validatedFeilds.error.flatten().fieldErrors,
    }
  }
  const { email, password } = validatedFeilds.data

  const users: any = await User.findOne({
    email: email,
    password: password,
  })

  if (email === users.email && password === users.password) {
    const newUser = await User.findOne({ email: email })
    const sessionId = newUser._id

    await createSession(sessionId)
    redirect("/profile")
  } else console.log("Email addres or password are wrong")
}
