import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./lib/auth.config";

const { auth } = NextAuth(authConfig);
export default auth(async function (req) {
    // Your custom middleware logic goes here
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const publicRoutes = ["/auth", "/apps"];
    const authRoutes = ["/login"];
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/apps", nextUrl));
        }
        return;
    }
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/login", nextUrl));
    }
    return;
});
