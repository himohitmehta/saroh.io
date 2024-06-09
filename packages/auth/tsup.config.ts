import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    // esbuildOptions(options) {
    //     options.banner = {
    //         js: '"use client"',
    //     };
    // },
    dts: true,
    target: "es2019",
    clean: true,
    minify: true,
    external: ["react"],
    ...options,
}));
