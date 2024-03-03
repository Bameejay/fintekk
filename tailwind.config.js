/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html,',
        './js/**/*.js',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                buttonColor: '#2E5CFF',
            },

            borderWidth: {
                '0.5': '0.5px',
            },
        },
    },
    plugins: [],
}