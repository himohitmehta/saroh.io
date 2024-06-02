/* eslint-disable import/no-default-export -- not needed */
// tailwind config is required for editor support
import sharedConfig from "@saroh/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
    presets: [
        {
            ...sharedConfig,
            content: [
                "./pages/**/*.{ts,tsx}",
                "./components/**/*.{ts,tsx}",
                "./app/**/*.{ts,tsx}",
                "./src/**/*.{ts,tsx}",
                "../../packages/ui/src/**/*.{ts,tsx}",
            ],
        },
    ],
};

export default config;
