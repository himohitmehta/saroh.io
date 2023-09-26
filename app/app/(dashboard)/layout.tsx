import Navbar from "@/components/app/navbar";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
