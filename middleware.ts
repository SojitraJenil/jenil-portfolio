import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // Skip static and api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  try {
    const res = await fetch(`${origin}/api/settings`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.next();
    }

    const settings = await res.json();
    const isAdmin = pathname.startsWith("/admin");

    // ✅ If site is down and not admin → redirect to maintenance
    if (settings?.siteDown && !isAdmin && pathname !== "/maintenance") {
      return NextResponse.redirect(
        new URL("/maintenance", request.url)
      );
    }

    // ✅ If site is NOT down but user is on maintenance page → redirect home
    if (!settings?.siteDown && pathname === "/maintenance") {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/:path*",
};