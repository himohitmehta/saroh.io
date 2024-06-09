import { auth } from "@/lib/auth";

export default async function AuthPage() {
    const session = await auth();
    return <div>{session?.user?.email}</div>;
}
