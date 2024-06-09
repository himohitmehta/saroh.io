import { auth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@saroh/ui/avatar";
import { Button } from "@saroh/ui/button";
import LogoutButton from "../components/logout-button";
export default async function Home() {
    const session = await auth();
    return (
        <main>
            <Button>Login</Button>
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>{session?.user?.email}</div>
            <LogoutButton />
            {/* <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <Button>Log out</Button>
            </form> */}
        </main>
    );
}
