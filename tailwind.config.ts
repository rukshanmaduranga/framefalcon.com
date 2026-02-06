import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#0a1628',
                'navy-blue-light': '#1a2942',
                'light-blue': '#3b82f6',
                'accent-blue': '#60a5fa',
            },
        },
    },
    plugins: [],
};

export default config;
