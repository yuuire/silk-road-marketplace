/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "brand": "#005a0a",
                "gray-dark": "#282629",
                "white-secondary": "#f7f7f7",
                "gray-light": "#d4d4d4",
                "gray": "#333333",
            },
        },
        fontFamily: {
            "sans": "Roboto, sans-serif",
        }
    },
    plugins: [],
};
