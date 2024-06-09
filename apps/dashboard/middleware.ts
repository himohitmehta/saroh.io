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
