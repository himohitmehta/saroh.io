/* eslint-disable @typescript-eslint/no-shadow -- no*/
/* eslint-disable import/no-default-export -- no */
/* eslint-disable @typescript-eslint/consistent-type-imports -- no  */
import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*.tsx"],
    format: ["esm"],
    esbuildOptions(options) {
        options.banner = {
            js: '"use client"',
        };
    },
    dts: true,
    minify: true,
    external: ["react"],
    ...options,
}));
