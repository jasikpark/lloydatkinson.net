import Vue from 'vue';
import Vuex from 'vuex';
import faker from 'faker';

import FeatureSwitchModule from './store/module';
import { defineFeatureSwitches, getFeatureSwitch, isFeatureSwitchEnabled } from './feature-switch';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        FeatureSwitchModule,
    },
});

describe('feature switch', () => {
    describe('functions', () => {
        describe('feature-switch.js', () => {
            beforeEach(() => {
                store.state.FeatureSwitchModule.features = [];
            });

            it('should dispatch an action to define every feature switch', () => {
                const featureSwitches = [
                    { name: faker.lorem.words, enabled: false },
                    { name: faker.lorem.words, enabled: false },
                ];

                defineFeatureSwitches(store.dispatch, featureSwitches);

                expect(store.state.FeatureSwitchModule.features.length).toBe(2);
            });

            it('should get specified feature switch from store', () => {
                const featureSwitches = [
                    { name: 'Feature1', enabled: false },
                    { name: faker.lorem.words, enabled: false },
                ];

                defineFeatureSwitches(store.dispatch, featureSwitches);

                expect(getFeatureSwitch(store, 'Feature1')).toBeDefined();
            });

            it('should return undefined when specified feature switch is not in the store', () => {
                const featureSwitches = [
                    { name: faker.lorem.words, enabled: false },
                    { name: faker.lorem.words, enabled: false },
                ];

                defineFeatureSwitches(store.dispatch, featureSwitches);

                expect(getFeatureSwitch(store, faker.lorem.words)).toBeDefined();
            });

            it('should return availability of the specified feature switch', () => {
                const featureSwitches = [
                    { name: 'Feature1', enabled: true },
                    { name: faker.lorem.words, enabled: false },
                ];

                defineFeatureSwitches(store.dispatch, featureSwitches);

                expect(isFeatureSwitchEnabled(store, 'Feature1')).toBe(true);
            });
        });
    });
});