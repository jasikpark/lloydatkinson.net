module.exports = {
    theme: {
        extend: {
            colors: {
                'red-vibrant': '#FF0000',
                'red-feature': '',
            },
        },
    },
    // https://tailwindcss.com/docs/pseudo-class-variants/
    variants: {
        backgroundColor: [
            'responsive',
            'hover',
            'focus',
            'active',
            'visited',
            'first',
            'last',
            'odd',
        ],
    },
    plugins: []
}