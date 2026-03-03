import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // ❗ VERY IMPORTANT: Skip these paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api") ||          // ✅ FIX
    pathname.startsWith("/maintenance")
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

    if (settings?.siteDown && !isAdmin) {
      return NextResponse.redirect(
        new URL("/maintenance", request.url)
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