import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  const languages = new Negotiator({
    headers: { "accept-language": acceptLanguage || "" },
  }).languages();
  const defaultLocale = "ru";
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), static files, and API routes
    "/((?!_next|api|favicon.ico|icons|other|project-images|youtube).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
