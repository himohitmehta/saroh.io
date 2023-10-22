import React from "react";

export default function SiteHomePage({
	params,
}: {
	params: { domain: string };
}) {
	return <div>SiteHomePage: {params.domain}</div>;
}
