/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                },
                teal: {
                    400: '#2dd4bf',
                    500: '#14b8a6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
