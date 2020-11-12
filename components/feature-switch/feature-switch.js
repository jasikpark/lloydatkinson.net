import store from '../store';

export const getFeatureSwitch = (name) => {
    const foundFeature = store.getters['FeatureSwitchModule/features'].find((feature) => feature.name === name);

    if (foundFeature) {
        return { name: foundFeature.name, enabled: foundFeature.enabled };
    }

    return undefined;
};

export const isFeatureSwitchEnabled = (name) => getFeatureSwitch(name).enabled;

export const defineFeatureSwitches = (features) => {
    for (const feature of features) {
        store.dispatch('FeatureSwitchModule/defineFeature', { name: feature.name, enabled: feature.enabled });
    }
};