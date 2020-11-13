import { loadFeatureSwitches, defineFeatureSwitches } from '../components/feature-switch/feature-switch';

import FeatureSwitchModule from '../components/feature-switch/store/module';

export const modules = {
    FeatureSwitchModule
};

export const actions = {
    nuxtServerInit ({ commit, dispatch }, { req, store, $config }) {
        const features = loadFeatureSwitches($config.dev);
        console.log({ featureCount: features.length })

        defineFeatureSwitches(dispatch, features);

        // for (const feature of features) {
        //     dispatch('FeatureSwitchModule/defineFeature', { name: feature.name, enabled: feature.enabled });
        // }
    }
};