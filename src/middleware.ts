// /middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    // Check for a valid JWT session token
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Define paths that require authentication
    const protectedPaths = ["/v1"];
    const isProtectedPath = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

    if (isProtectedPath && !token) {
        // Redirect to login page if token is missing
        const url = new URL("/api/auth/signin", req.url);
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/v1/:path*"],
};
