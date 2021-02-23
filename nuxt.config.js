import { apaStyleCasing } from './utilities/typography';

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: (title) => {
            // If undefined or blank then we don't need the hyphen
            return (title) ? `${title} - Lloyd Atkinson` : 'Lloyd Atkinson';
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Lloyd Atkinson - Software Developer and Maker' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],
    
    loading: {
        color: 'red',
    },

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/google-analytics',
        '@nuxtjs/netlify-files',
    ],

    
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    hooks: {
        'content:file:beforeInsert': (document) => {
            if (document.extension === '.md') {
                document.title = apaStyleCasing(document.title);
            }
        }
    },
    
    googleFonts: {
        families: {
            Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        },

        display: 'fallback',
    },

    googleAnalytics: {
        id: 'UA-148006071-1'
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    },

    publicRuntimeConfig: {
        url: process.env.URL,
        gitBranch: process.env.BRANCH,
        gitCommit: process.env.COMMIT_REF,
        buildContext: process.env.CONTEXT,
        buildDateTime: new Date().toISOString(),
        dev: process.env.NODE_ENV !== 'production',
    },

    generate: {
        fallback: true,
    },

    modern: 'client',
};