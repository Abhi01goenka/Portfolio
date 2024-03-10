const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,tsx,md,mdx}",
        "./components/**/*.{ts,tsx,md,mdx}",
        "./theme.config.tsx",
    ],
    darkMode: "class",
    theme: {},
    plugins: [
        // rest of the code
    ],
};
