/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: '#4285f4',
                blue: '#3B86F0', // gradient-start
                teal: '#2FA3AB', // gradient-mid
                green: '#26B978', // gradient-end
                'footer-color': '#21242C',
            },
        },
    },
    plugins: [],
};
