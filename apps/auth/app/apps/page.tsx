import Link from "next/link";

export default function AppsListPage() {
    return (
        <div>
            Select the app to open
            <div>
                <Link href="http://localhost:3004">Dashboard</Link>
            </div>
        </div>
    );
}
