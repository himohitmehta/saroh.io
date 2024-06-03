import { Avatar, AvatarFallback, AvatarImage } from "@saroh/ui/avatar";
import { Button } from "@saroh/ui/button";

export default function Home() {
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
        </main>
    );
}
