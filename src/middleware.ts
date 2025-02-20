// middleware.ts or middleware.js in your project root

import type { NextRequest } from 'next/server';

// Inside middleware.ts (or middleware.js)
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './libs/i18nNavigation';

const intlMiddleware = createMiddleware(routing);

// Optionally, handle the redirect from `/` to `/en` (or any default locale)
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ], // Match root path as well
};
