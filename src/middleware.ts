import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const redirectUrl = new URL('/', request.url)

  const regex = new RegExp('\\b' + 'main' + '\\b', 'i')
  const regex2 = new RegExp('\\b' + 'conversations' + '\\b', 'i')

  if (!token && regex.test(request.url)) {
    return NextResponse.redirect(redirectUrl)
  }

  if (!token && regex2.test(request.url)) {
    return NextResponse.redirect(redirectUrl)
  }

  if (token && !regex.test(request.url) && !regex2.test(request.url)) {
    return NextResponse.redirect(new URL('/main', request.url))
  }
}

export const config = {
  matcher: ['/main/:path*', '/', '/conversations/:path*'],
}
