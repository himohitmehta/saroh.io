// import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import StoreSwitcher from "./store-switcher";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";
// import prismadb from "@/lib/prismadb";
import { getSession } from "@/lib/auth";

const Navbar = async () => {
	// const { userId } = auth();
	const session = await getSession();
	const name = session?.user.name!;
	const userName = session?.user.username!;

	const email = session?.user.email!;
	const avatarUrl = session?.user.image!;
	// if (!userId) {
	// 	redirect("/sign-in");
	// }

	//   const stores = await prismadb.store.findMany({
	//     where: {
	//       userId,
	//     }
	//   });
	const stores = [
		{ name: "project1", id: "1" },
		{ name: "project2", id: "2" },
	];

	return (
		<div className="border-b">
			<div className="flex h-16 items-center px-4">
				<StoreSwitcher items={stores} />
				<MainNav className="mx-6" />
				<div className="ml-auto flex items-center space-x-4">
					<ThemeToggle />
					{/* <UserButton afterSignOutUrl="/" /> */}
					<UserNav
						avatarUrl={avatarUrl}
						email={email || userName}
						name={name}
						// userName={userName}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
