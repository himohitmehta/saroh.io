// import { PrismaAdapter } from "@auth/prisma-adapter";
// import NextAuth, { NextAuthResult } from "next-auth";
// import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
// import prisma from "./prisma";
// const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

// export const nextAuthInstance: NextAuthResult = NextAuth({
//     providers: [GitHub, Google],
//     adapter: PrismaAdapter(prisma),
//     session: { strategy: "jwt" },
// });

// export const auth = nextAuthInstance.auth;
// export const handlers = nextAuthInstance.handlers;
// export const signIn = nextAuthInstance.signIn;
// export const signOut = nextAuthInstance.signOut;
