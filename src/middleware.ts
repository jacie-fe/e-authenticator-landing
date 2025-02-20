// middleware.ts or middleware.js in your project root

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user is authenticated (for example, by checking a cookie or session)
  const token = request.cookies.get('auth-token'); // This could be a cookie or some other method you use to authenticate

  // If no token found, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If token exists, allow the request to proceed
  return NextResponse.next();
}

// Define which routes this middleware will run for
export const config = {
  matcher: ['/dashboard', '/profile', '/settings'], // Routes that require authentication
};
