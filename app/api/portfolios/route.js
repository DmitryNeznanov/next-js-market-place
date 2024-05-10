import { NextResponse } from "next/server"
import Portfolio from "../../models/Portfolio"

export async function GET() {
  try {
    const items = await Portfolio.find()
    return NextResponse.json({ items }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "error", err }, { status: 505 })
  }
}
