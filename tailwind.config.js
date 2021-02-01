const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        fontFamily: {
            'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },
        extend: {
            colors: {
                'red-vibrant': '#ff0000'
            },
            spacing: {
                'box-tall': '30rem',
            },
        },
    },
    variants: {
        boxShadow: ['responsive', 'hover', 'focus', 'active'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    // purge: {
    //     // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    //     enabled: !dev,
    //     content: [
    //         `${srcDir}/components/**/*.{vue,js}`,
    //         `${srcDir}/layouts/**/*.vue`,
    //         `${srcDir}/pages/**/*.vue`,
    //         `${srcDir}/plugins/**/*.{js,ts}`,
    //         `${rootDir}/nuxt.config.{js,ts}`
    //     ]
    // }
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.{vue,js}',
            'layouts/**/*.{vue,js}',
            'pages/**/*.{vue,js}',
            'plugins/**/*.js',
            'nuxt.config.js',
            // TypeScript
            'plugins/**/*.ts',
            'nuxt.config.ts'
        ]
    }
};