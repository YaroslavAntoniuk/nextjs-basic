import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  return NextResponse.json({ message: 'api/todo GET' })
}

export const POST = async (req: Request) => {
  const data = await req.json()
  return NextResponse.json({ message: data })
}
