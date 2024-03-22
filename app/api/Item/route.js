import { NextResponse } from "next/server"
import Item from "../../models/Item"

export async function GET() {
  try {
    const items = await Item.find()
    return NextResponse.json({ items }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "error", err }, { status: 505 })
  }
}
