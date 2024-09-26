"use server"
import { FormState, definations } from "../lib/definations"
import User from "@/app/models/User"
import { createSession } from "../lib/session"
import { redirect } from "next/navigation"
export async function signup(state: FormState, formData: FormData) {
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

  const users = await User.findOne({
    email: email,
  })

  if (users === null) {
    await User.create({
      email: email,
      password: password,
    })
    console.log("User is created!")
    const newUser = await User.findOne({ email: email })
    const sessionId = newUser._id
    console.log(sessionId)

    await createSession(sessionId)
    redirect("/")
  } else console.log("Email already registered")
}
