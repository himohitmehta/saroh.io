import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@saroh/database";
import NextAuth, { NextAuthResult } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const nextAuthInstance: NextAuthResult = NextAuth({
    providers: [GitHub, Google],
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
});
