import { loadFeatureSwitches, defineFeatureSwitches } from '../components/feature-switch/feature-switch';

import FeatureSwitchModule from '../components/feature-switch/store/module';

export const modules = {
    FeatureSwitchModule
};

export const actions = {
    nuxtServerInit ({ commit, dispatch }, { req, store, $config }) {
        const features = loadFeatureSwitches($config.dev);

        defineFeatureSwitches(dispatch, features);
    }
};