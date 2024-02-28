import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create blogs, portfolios or storefronts | saroh.io",
	description:
		"Create your own blog, portfolio or storefront with ease. Easily manage your online presence with saroh.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
					forcedTheme="dark"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
