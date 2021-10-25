const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            rose: colors.rose,
            pink: colors.pink,
            fuchsia: colors.fuchsia,
            purple: colors.purple,
            violet: colors.violet,
            indigo: colors.indigo,
            blue: colors.blue,
            lightBlue: colors.lightBlue,
            sky: colors.sky,
            cyan: colors.cyan,
            teal: colors.teal,
            emerald: colors.emerald,
            green: colors.green,
            lime: colors.lime,
            yellow: colors.yellow,
            amber: colors.amber,
            orange: colors.orange,
            red: colors.red,
            warmGray: colors.warmGray,
            trueGray: colors.trueGray,
            gray: colors.gray,
            coolGray: colors.coolGray,
            blueGray: colors.blueGray,
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
        },
        extend: {
            colors: {
                'red-vibrant': '#ff0000'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};