/* eslint-disable @typescript-eslint/no-shadow -- no*/
/* eslint-disable import/no-default-export -- no */
/* eslint-disable @typescript-eslint/consistent-type-imports -- no  */
import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*.tsx"],
    format: ["esm", "cjs"],
    esbuildOptions(options) {
        options.banner = {
            js: '"use client"',
        };
    },
    dts: true,
    target: "es2019",
    clean: true,
    minify: true,
    external: ["react"],
    ...options,
}));
