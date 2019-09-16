// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import DefaultLayout from '~/layouts/default.vue';
import FeatureHeading from '~/components/ui/feature-heading.vue';

config.autoAddCss = false;
library.add(faGithub, faTwitter, faEnvelope);

require('~/main.css');

export default function (Vue, { router, head, isClient }) {
    head.meta.push({
        name: 'keywords',
        content: 'software development,programming,embedded,low level programming,electronics,maker,pic microcontroller,.net,.net core,c#,javascript,es6,es7,vue,vue.js,functional programming'
    });

    // Set default layout as a global component
    Vue.component('layout', DefaultLayout);
    Vue.component('font-awesome', FontAwesomeIcon);
    Vue.component('feature-heading', FeatureHeading);
};