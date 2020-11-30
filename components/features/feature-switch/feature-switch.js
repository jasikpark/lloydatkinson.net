import developmentFeatures from './environments/features.development.js';
import productionFeatures from './environments/features.production.js';

export const getFeatureSwitch = (store, name) => {
    const foundFeature = store.getters['FeatureSwitchModule/features'].find((feature) => feature.name === name);

    if (foundFeature) {
        return { name: foundFeature.name, enabled: foundFeature.enabled };
    }

    return undefined;
};

export const isFeatureSwitchEnabled = (store, name) => getFeatureSwitch(store, name).enabled;

export const loadFeatureSwitches = (isDevelopment) => {
    if (isDevelopment) {
        return developmentFeatures;
    } else {
        return productionFeatures;
    }
}

export const defineFeatureSwitches = (dispatch, features) => {
    for (const feature of features) {
        dispatch('FeatureSwitchModule/defineFeature', { name: feature.name, enabled: feature.enabled });
    }
};