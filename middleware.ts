import { NextRequest, NextResponse } from 'next/server'

const middleware = async (req: NextRequest) => {
  // some auth logic
  return NextResponse.redirect(new URL(req.url))
}

export const config = {
  matcher: ['/todos'],
}

export default middleware
