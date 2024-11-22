import React from "react";

export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}