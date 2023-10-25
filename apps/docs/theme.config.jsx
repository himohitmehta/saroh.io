export default {
	docsRepositoryBase: "https://github.com/saroh-io/saroh.io/tree/main/docs",
	logo: <span>Saroh.io Documentation</span>,
	project: {
		link: "https://github.com/saroh-io/saroh.io",
	},
	footer: false,
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Saroh.io",
		};
	},
	// ... other theme options
};
