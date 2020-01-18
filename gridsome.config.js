// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'lloydatkinson.net',
    siteDescription: 'Lloyd Atkinson - Software Developer and Maker',
    siteUrl: 'https://lloydatkinson.net',
    // templates: {
    //     Post: '/post/:title',
    // },
    plugins: [
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Post', // required
                baseDir: './content/post', // where .md files are located.
                // template: './src/templates/Documentation.vue' // optional
                template: './src/templates/post.vue',
                route: '/post/:title',
            },
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Project', // required
                baseDir: './content/project', // where .md files are located.
                // template: './src/templates/Documentation.vue' // optional
            },
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: 'tailwind.config.js',
                purgeConfig: {},
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true,
            },
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-148006071-1',
            },
        },
        {
            use: '@gridsome/plugin-sitemap',
        },
    ],
};