import {
    DEFINE_FEATURE,
    ENABLE_FEATURE_AVAILABILITY,
    DISABLE_FEATURE_AVAILABILITY,
} from './mutation-types.js';

const actions = {
    defineFeature ({ commit, getters }, { name, enabled }) {
        // console.log('communications-notifications-component-v04-pkg: defined new feature switch', { name, enabled });

        commit(DEFINE_FEATURE, { name, enabled });
    },

    enableFeatureAvailability ({ commit, getters }, { name }) {
        commit(ENABLE_FEATURE_AVAILABILITY, { name });
    },

    disableFeatureAvailability ({ commit, getters }, { name }) {
        commit(DISABLE_FEATURE_AVAILABILITY, { name });
    },

    setFeatureAvailability ({ commit, getters }, { name, enabled }) {
        if (enabled) {
            commit(ENABLE_FEATURE_AVAILABILITY, { name });
        } else {
            commit(DISABLE_FEATURE_AVAILABILITY, { name });
        }
    },
};

export default actions;