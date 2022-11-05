import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n.config";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { defaultLocale, locales } = i18n;
  const { headers, nextUrl } = request;

  const shouldCheckLocale = !nextUrl.pathname.startsWith("/_next") && !nextUrl.pathname.startsWith("/favicon");

  const firstSegment = nextUrl.pathname.split("/")[1] as typeof locales[number];
  const noValidLocale = !locales.includes(firstSegment);

  if (shouldCheckLocale && noValidLocale) {
    // Omit country for now
    const accepts = headers.get("accept-language") || "";
    const detected = accepts.split(",")[0].split("-")[0] as typeof locales[number];

    const validLocale = locales.includes(detected) ? detected : defaultLocale;

    nextUrl.pathname = `/${validLocale}${nextUrl.pathname}`;

    return NextResponse.rewrite(nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
