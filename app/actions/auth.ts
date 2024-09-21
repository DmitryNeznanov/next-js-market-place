"use server"
import { FormState, SignupFormSchema } from "../lib/definations"
import User from "@/app/models/User"
import bcrypt from "bcrypt"

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

  console.log(users)

  if (users.length === 0) {
    await User.create({
      email: email,
      password: hasedPassword,
    })
  } else console.log("Email already registered")
}
