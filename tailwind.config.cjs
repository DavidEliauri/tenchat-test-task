/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            Inter: ['Inter', 'sans-serif'],
            Montserrat: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                'tenchat-black': '#09090B',
            },
        },
    },
};
