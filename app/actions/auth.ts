"use server"
import { FormState, SignupFormSchema } from "../lib/definations"
import User from "@/app/models/User"
import bcrypt from "bcrypt"
import { createSession } from "../lib/session"
import { redirect } from "next/navigation"
export async function signup(state: FormState, formData: FormData) {
  const validatedFeilds = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })
  if (!validatedFeilds.success) {
    return {
      errors: validatedFeilds.error.flatten().fieldErrors,
    }
  }
  const { email, password } = validatedFeilds.data

  const hasedPassword = await bcrypt.hash(password, 10)
  const users = await User.find({
    email: email,
  })

  if (users.length === 0) {
    await User.create({
      email: email,
      password: hasedPassword,
    })
    console.log("User is created!")
    const newUser = await User.find({ email: email })
    const sessionId = newUser[0]._id

    await createSession(sessionId)
    redirect("/")
  } else console.log("Email already registered")
}
