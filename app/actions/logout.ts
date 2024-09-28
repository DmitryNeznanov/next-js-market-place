import { deleteSession } from "@/app/lib/deleteSession"
import { redirect } from "next/navigation"

export async function logout() {
  deleteSession()
  redirect("/")
}
