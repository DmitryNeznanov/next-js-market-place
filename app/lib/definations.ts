import { z } from "zod"
// import User from "@/app/models/User"

export const definations = z.object({
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  // .refine(async (e) => {
  //   const users = await User.findOne({ email: e })
  //   return users.includes(e)
  // }, ""),
})

export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined
