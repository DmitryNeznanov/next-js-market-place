"use server"
import { FormState, SignupFormSchema } from "../lib/definations"
import User from "@/app/models/User"
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
  const users = await User.find({
    email: validatedFeilds.data.email,
  })

  if (users.length === 0) {
    await User.create({
      email: validatedFeilds.data.email,
      password: validatedFeilds.data.password,
    })
  } else console.log("Email already registered")
}
