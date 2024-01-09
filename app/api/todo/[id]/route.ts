import db from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const todo = await db.todo.findUnique({ where: { id: context.params.id } })
  return NextResponse.json({ data: todo })
}
