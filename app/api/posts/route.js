import { NextResponse } from "next/server"
import Post from "../../models/Post"

export async function GET() {
  try {
    const items = await Post.find()
    return NextResponse.json({ items }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "error", err }, { status: 505 })
  }
}
