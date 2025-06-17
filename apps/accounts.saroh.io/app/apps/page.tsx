import Link from "next/link";

export default function AppsListPage() {
    return (
        <div className="flex flex-col gap-2 p-8 justify-center items-center">
            <div className="flex flex-col gap-2 text-2xl font-bold">
                Select the app to open
            </div>
            <div className="flex flex-col gap-2 p-8 ">
                <Link href="http://localhost:3001" className="hover:bg-gray-100 rounded-md p-2">Admin</Link>
                <Link href="http://localhost:3002" className="hover:bg-gray-100 rounded-md p-2">AI</Link>
                <Link href="http://localhost:3003" className="hover:bg-gray-100 rounded-md p-2">Application</Link>
                <Link href="http://localhost:3004" className="hover:bg-gray-100 rounded-md p-2">Chatbot</Link>
                <Link href="http://localhost:3005" className="hover:bg-gray-100 rounded-md p-2">Dashboard</Link>
                <Link href="http://localhost:3006" className="hover:bg-gray-100 rounded-md p-2">Docs</Link>
                <Link href="http://localhost:3007" className="hover:bg-gray-100 rounded-md p-2">Email</Link>
                <Link href="http://localhost:3008" className="hover:bg-gray-100 rounded-md p-2">Sites</Link>
                <Link href="http://localhost:3009" className="hover:bg-gray-100 rounded-md p-2">Templates</Link>
                <Link href="http://localhost:3010" className="hover:bg-gray-100 rounded-md p-2">UI</Link>
            </div>
        </div>
    );
}
