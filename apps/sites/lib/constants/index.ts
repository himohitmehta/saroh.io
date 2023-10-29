export const HOME_HOSTNAMES = new Set([
	"saroh.io",
	"home.localhost:3000",
	"localhost",
]);

export const isHomeHostname = (domain: string) => {
	return HOME_HOSTNAMES.has(domain) || domain.endsWith(".vercel.app");
};

export const HOME_DOMAIN =
	process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
		? "https://saroh.io"
		: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
		? // ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		  "https://saroh.io"
		: "http://home.localhost:8888";

export const APP_HOSTNAMES = new Set([
	"app.saroh.io",
	"preview.saroh.io",
	"localhost:8888",
	"localhost",
]);

export const APP_DOMAIN =
	process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
		? "https://app.saroh.io"
		: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
		? // ? "https://preview.saroh.io"
		  "https://app.saroh.io"
		: "http://localhost:8888";

export const APP_DOMAIN_WITH_NGROK =
	process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
		? "https://app.saroh.io"
		: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
		? "https://preview.saroh.io"
		: process.env.NGROK_URL;

export const API_HOSTNAMES = new Set(["api.saroh.io", "api.localhost:8888"]);

export const ADMIN_HOSTNAMES = new Set([
	"admin.saroh.io",
	"admin.localhost:8888",
]);

export const DEFAULT_REDIRECTS = {
	home: "https://saroh.io",
	saroh: "https://saroh.io",
	signin: "https://app.saroh.io/login",
	login: "https://app.saroh.io/login",
	register: "https://app.saroh.io/register",
	signup: "https://app.saroh.io/register",
	app: "https://app.saroh.io",
	dashboard: "https://app.saroh.io",
	links: "https://app.saroh.io/links",
	settings: "https://app.saroh.io/settings",
	welcome: "https://app.saroh.io/welcome",
	discord: "https://discord.com/sarohdotio", // placeholder for now
	tags: "https://saroh.io/help/how-to-use-tags",
};

export const SHOW_BACKGROUND_SEGMENTS = new Set([
	"tools",
	"pricing",
	"help",
	"customers",
	"blog",
	"(blog-post)",
	"login",
	"register",
	"auth",
]);

export const SAROH_HEADERS = {
	headers: {
		"x-powered-by": "Saroh.io - Storefront creator",
	},
};
