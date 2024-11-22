// eslint.config.js

import js from "@eslint/js";

export default [
    js.configs.recommended, // Recommended config applied to all files
    // Override the recommended config
    {
        rules: {
            indent: ["error", 2],
            "no-unused-vars": "warn"
        }
        // ...other configuration
    }
]