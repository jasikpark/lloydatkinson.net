import { loadFeatureSwitches, defineFeatureSwitches } from '../components/features/feature-switch/feature-switch';
import FeatureSwitchModule from '../components/features/feature-switch/store/module';

export const modules = {
    FeatureSwitchModule
};

export const actions = {
    nuxtServerInit ({ commit, dispatch }, { req, store, $config }) {
        const features = loadFeatureSwitches($config.dev);

        defineFeatureSwitches(dispatch, features);
    }
};