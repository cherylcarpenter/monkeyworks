const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern':
                    "linear-gradient(to bottom, theme('colors.neutral.950 / 10%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto']
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#B42033',
                    'primary-content': '#171717',
                    secondary: '#3C3B6E',
                    info: '#2bdcd2',
                    'info-content': '#171717'
                }
            }
        ]
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
