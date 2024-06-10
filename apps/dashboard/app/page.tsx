import Dashboard from "@/components/dashboard";
import { auth } from "@/lib/auth";
export default async function Home() {
    const session = await auth();
    return (
        <main>
            <Dashboard />
            {/* <Button>Login</Button>
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>{session?.user?.email}</div>
            <LogoutButton /> */}
        </main>
    );
}
