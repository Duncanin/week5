const { info } = require('sass');
const { darkMode } = require('./tailwind.config');
const { boxShadow } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './main.js',
        './pages/**/*.html',
        './layout/**/*.ejs',
        './assets/**/*.{html,js,scss}',
        // twe
        './node_modules/tw-elements/js/**/*.js',
    ],
    theme: {
        screens: {
            md: '768px',
            lg: '992px',
        },
        container: {
            center: true, // 置中
            screens: {
                // sm: '375px',
                // md: '768px',
                // lg: '992px',
                xl: '1080px', // 最大寬度
            }
        },
        extend: {
            colors: {
                primary: {
                    main: '#4A69E8',
                    25: '#0E2271',
                    40: '#1736B5',
                    60: '#4A69E8',
                    70: '#778EEE',
                    80: '#A4B4F3',
                    90: '#D2D9F9',
                    97: '#F1F4FD',
                },
                secondary: {
                    main : '#36C99F',
                    35 : '#268C6F',
                    50 : '#36C99F',
                    70 : '#87DEC5',
                    90 : '#D7F4EC',
                },
                natural: {
                    main: '#141A1F',
                    10: '#141A1F',
                    30: '#3D4D5C',
                    50: '#667F99',
                    60: '#8599AD',
                    75: '#B2BFCC',
                    85: '#D1D9E1',
                    90: '#E0E5EB',
                    95: '#F0F3F5',
                    light: '#FCFCFD',
                },
                success: {
                    30: '#369108',
                    40: '#47C20A',
                    90: '#DEFCCF',
                    },
                danger: {
                    45: '#E51300',
                    70: '#FF7467',
                    90: '#FFD0CC',
                    },
                orange: {
                    35: '#B26800',
                    48: '#F58F00',
                    90: '#FFEACC',
                    },
            },
            borderRadius: {
                'radius-0': '0px',
                'radius-12': '12px',
                'radius-16': '16px',
                'radius-24': '24px',
                'radius-1000': '1000px',
            },
            boxShadow: {
                'Primary': '0px 0px 16px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
};