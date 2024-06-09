import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./lib/auth.config";

const { auth } = NextAuth(authConfig);
export default auth(async function (req) {
    // Your custom middleware logic goes here
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const publicRoutes = ["/auth"];
    const authRoutes = ["/login"];
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/", nextUrl));
        }
        return;
    }
    if (isPublicRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/", nextUrl));
        }
        return;
    }

    if (!isLoggedIn) {
        return NextResponse.redirect(
            new URL("/login", "http://localhost:3000"),
        );
    }
    return;
});
export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. /favicon.ico)
         */
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};
