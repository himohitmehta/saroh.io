"use client";
import { Button } from "@saroh/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AppsListPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-8">
            <Button onClick={() => signOut()}>Sign Out</Button>
            <div className="flex flex-col gap-2 text-2xl font-bold">
                Select the app to open
            </div>
            <div className="flex flex-col gap-2 p-8 ">
                <Link
                    href="http://localhost:3001"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Admin
                </Link>
                <Link
                    href="http://localhost:3002"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    AI
                </Link>
                <Link
                    href="http://localhost:3003"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Application
                </Link>
                <Link
                    href="http://localhost:3004"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Chatbot
                </Link>
                <Link
                    href="http://localhost:3005"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Dashboard
                </Link>
                <Link
                    href="http://localhost:3006"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Docs
                </Link>
                <Link
                    href="http://localhost:3007"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Email
                </Link>
                {/* <Link href="http://localhost:3008" className="hover:bg-gray-100 rounded-md p-2">Website</Link> */}
                <Link
                    href="http://localhost:3009"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Sites
                </Link>
                <Link
                    href="http://localhost:3010"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    Templates
                </Link>
                <Link
                    href="http://localhost:3011"
                    className="rounded-md p-2 hover:bg-gray-100"
                >
                    UI
                </Link>
            </div>
        </div>
    );
}
