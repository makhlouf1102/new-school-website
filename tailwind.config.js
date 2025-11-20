/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                sunset: {
                    ...require("daisyui/src/theming/themes")["sunset"],
                    "primary": "oklch(74.703% 0.158 39.947)",
                    "primary-content": "oklch(14.94% 0.031 39.947)",
                    "secondary": "oklch(72.537% 0.177 2.72)",
                    "secondary-content": "oklch(14.507% 0.035 2.72)",
                    "accent": "oklch(71.294% 0.166 299.844)",
                    "accent-content": "oklch(14.258% 0.033 299.844)",
                    "neutral": "oklch(26% 0.019 237.69)",
                    "neutral-content": "oklch(70% 0.019 237.69)",
                    "base-100": "oklch(22% 0.019 237.69)",
                    "base-200": "oklch(20% 0.019 237.69)",
                    "base-300": "oklch(18% 0.019 237.69)",
                    "base-content": "oklch(77.383% 0.043 245.096)",
                    "info": "oklch(85.559% 0.085 206.015)",
                    "info-content": "oklch(17.111% 0.017 206.015)",
                    "success": "oklch(85.56% 0.085 144.778)",
                    "success-content": "oklch(17.112% 0.017 144.778)",
                    "warning": "oklch(85.569% 0.084 74.427)",
                    "warning-content": "oklch(17.113% 0.016 74.427)",
                    "error": "oklch(85.511% 0.078 16.886)",
                    "error-content": "oklch(17.102% 0.015 16.886)",
                },
            },
        ],
    },

}
