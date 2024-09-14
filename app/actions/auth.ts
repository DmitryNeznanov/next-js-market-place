import { FormState, SignupFormSchema } from "../lib/definations"
import User from "@/app/models/Item"
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
  // await User.create({
  //   email: validatedFeilds.email,
  //   password: validatedFeilds.password,
  // })
}
