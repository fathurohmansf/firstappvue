/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            boxShadow: {
                outline: "0 0 0 1px rgba(66, 153, 225, 0.5)",
            },
            colors: {
                "orange-button": "#FF872E",
                "green-button": "#1ABC9C",
                "purple-hover": "#4C52F8",
                "purple-hover-stroke": "#8286FF",
                "purple-progress": "#3B41E3",
            },
            borderRadius: {
                20: "20px",
            },
        },
    },
    fontFamily: {
        sans: ["Poppins", "sans-serif"],
    },
    variants: {},
    plugins: [],
    content: [
        `${srcDir}/components/**/*.{vue,js,ts}`,
        `${srcDir}/layouts/**/*.vue`,
        `${srcDir}/pages/**/*.vue`,
        `${srcDir}/composables/**/*.{js,ts}`,
        `${srcDir}/plugins/**/*.{js,ts}`,
        `${srcDir}/utils/**/*.{js,ts}`,
        `${srcDir}/App.{js,ts,vue}`,
        `${srcDir}/app.{js,ts,vue}`,
        `${srcDir}/Error.{js,ts,vue}`,
        `${srcDir}/error.{js,ts,vue}`,
        `${srcDir}/app.config.{js,ts}`
    ]
}