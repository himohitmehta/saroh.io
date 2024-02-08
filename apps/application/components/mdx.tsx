"use client";

import { replaceLinks } from "@/lib/remark-plugins";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
// import { Tweet } from "react-tweet";
import BlurImage from "@/components/blur-image";

export default function MDX({ source }: { source: MDXRemoteProps }) {
	const components = {
		a: replaceLinks,
		BlurImage,
	};

	return (
		<article
			className={` prose prose-stone m-auto w-11/12 dark:prose-invert sm:prose-lg sm:w-3/4 prose-h1:text-3xl prose-headings:font-semibold prose-h2 prose-h3 prose-h4 prose-p prose-blockquote prose-code prose-ol prose-ul prose-li prose-img prose-hr `}
			suppressHydrationWarning={true}
		>
			{/* @ts-ignore */}
			<MDXRemote {...source} components={components} />
		</article>
	);
}
