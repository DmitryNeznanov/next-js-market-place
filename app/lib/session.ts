import { cookies } from "next/headers"
import Session from "../models/session"
import User from "../models/User"
export async function createSession(sessionId: any) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const newUser = await User.findById(sessionId)
  const { _id, email, password } = newUser

  await Session.create({
    userId: _id,
    email: email,
    sessionStart: Date.now(),
  })
  console.log("Session is created!")

  cookies().set("session", sessionId, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
}
