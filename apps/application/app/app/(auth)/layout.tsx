import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Login | Saroh",
    description:
        "Login to saroh. A platform for managing your portfolios, marketing websites and more.",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}
