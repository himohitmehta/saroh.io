/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["eslint-config-custom/react-internal.js"],
    parser: "@typescript-eslint/parser",
    rules: {
        "no-redeclare": "off",
    },
};
