import { SessionProvider } from "next-auth/react";
import React from "react";
export function AuthProvider({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
