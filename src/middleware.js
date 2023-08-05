import { NextRequest, NextResponse } from "next/server"
const middleware = (req) => {
  return NextResponse.redirect(new URL("/components/Login", req.url))
}

export const config = {
  matcher: [
    "/components/home",
    "/components/studentsList/:path*  "
  ],
}

export default middleware
