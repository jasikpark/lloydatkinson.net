import {
    DEFINE_FEATURE,
    ENABLE_FEATURE_AVAILABILITY,
    DISABLE_FEATURE_AVAILABILITY,
} from './mutation-types.js';

const mutations = {
    [DEFINE_FEATURE] (state, { name, enabled }) {
        state.features = [...state.features, { name, enabled }];
    },

    [ENABLE_FEATURE_AVAILABILITY] (state, { name }) {
        state.features = state.features.map((item) => {
            if (item.name === name) {
                return {
                    ...item,
                    enabled: true,
                };
            }

            return item;
        });
    },

    [DISABLE_FEATURE_AVAILABILITY] (state, { name }) {
        state.features = state.features.map((item) => {
            if (item.name === name) {
                return {
                    ...item,
                    enabled: false,
                };
            }

            return item;
        });
    },
};

export default mutations;