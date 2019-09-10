// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import DefaultLayout from '~/layouts/Default.vue';

config.autoAddCss = false;
library.add(faGithub, faTwitter, faEnvelope);

require('~/main.css');

export default function (Vue, { router, head, isClient }) {
    head.bodyAttrs = { class: '' };

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.component('font-awesome', FontAwesomeIcon);
}