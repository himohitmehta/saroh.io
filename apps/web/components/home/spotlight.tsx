import { MovingBorderButton } from "../ui/moving-borders";
import { Spotlight } from "../ui/spotlight";

export function SpotlightPreview() {
	return (
		<div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className=" mx-auto relative z-10  w-full pt-20 md:pt-0">
				<span
					// href={`/${latestPost._raw.sourceFileDir}/${latestPost.slug}`}
					className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 "
				>
					<p className="text-sm font-semibold text-gray-700">
						{/* {latestPost.title} */}
						Introducing Saroh - a new way to manage your online
						storefronts.
					</p>
					{/* <ExpandingArrow className="-ml-1 h-3.5 w-3.5" /> */}
				</span>

				<h1 className="text-4xl mt-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
					Storefronts With
					<br /> Superpowers
				</h1>
				<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
					Saroh is an open-source storefront management tool for
					businesses to create, share, and track their online
					business.
				</p>
				<div className="mx-auto mt-10 flex max-w-fit space-x-4">
					<MovingBorderButton>Coming Soon</MovingBorderButton>
				</div>
			</div>
		</div>
	);
}
