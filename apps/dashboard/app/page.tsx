import { auth } from "@/lib/auth";
export default async function Home() {
    const session = await auth();
    return (
        <main>
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
