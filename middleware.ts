import { NextRequest, NextResponse } from 'next/server'

const middleware = async (req: NextRequest) => {
  // some auth logic
}

export const config = {
  matcher: ['/todos'],
}

export default middleware
