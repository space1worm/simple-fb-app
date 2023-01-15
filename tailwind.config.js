/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "xsm": "400px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
