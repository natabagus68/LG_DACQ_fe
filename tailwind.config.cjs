/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    '50': '#EBECEC',
                    '100': '#C0C3C5',
                    '200': '#A2A5A9',
                    '500': '#B1B5BA',
                    'foundation-500': '#343C44',
                    '700': '#5C5E61',
                },
                green: {
                    '50': '#E7F2EF',
                    '200': '#8FC3B5',
                    '300': '#5CA894',
                    '500': '#0B7D5F',
                    '600': '#0A7256',
                },
                red: {
                    '50': '#FCEAEA',
                    '500': '#DE1B1B',
                },
                sky: {
                    'base': '#CDCFD0',
                    'light': '#E3E5E6',
                    'lightest': '#F7F9FA',
                },
                teal: {
                    '50': '#E8F5F3'
                }
            },
            fontSize: {
                '4xl': '34px',
            },
            fontWeight: {
                'semibold': '500',
                '600': '600',
            },
            fontFamily: {
                'display': 'Marcellus',
                'body': 'Lato'
            },
        },
    },
    plugins: [],
};
