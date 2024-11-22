// eslint.config.js

import js from "@eslint/js";

export default [
    js.configs.recommended, // Recommended config applied to all files
    // Override the recommended config
    {
        rules: {
            "no-unused-vars": "warn"
        }
        // ...other configuration
    }
]