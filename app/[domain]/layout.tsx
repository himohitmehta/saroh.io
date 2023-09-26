import React, { ReactNode } from "react";

interface DashboardLayoutProps {
	children: ReactNode;
}
export default function SiteRootLayout({ children }: DashboardLayoutProps) {
	return <div>{children}</div>;
}
