import PlaceholderCard from "@/components/placeholder-card";
import Sites from "@/components/sites";
import React, { Suspense } from "react";

export default function SitesPage() {
	return (
		<div className="flex flex-col space-y-6 p-8">
			<div className="flex items-center justify-between">
				<h1 className="font-cal text-3xl font-bold dark:text-white">
					Top Sites
				</h1>
				{/* <Suspense fallback={null}>
        <OverviewSitesCTA />
      </Suspense> */}
			</div>
			<Suspense
				fallback={
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{Array.from({ length: 4 }).map((_, i) => (
							<PlaceholderCard key={i} />
						))}
					</div>
				}
			>
				<Sites limit={4} />
			</Suspense>
		</div>
	);
}
