import faker from 'faker';
import {
    DEFINE_FEATURE,
    ENABLE_FEATURE_AVAILABILITY,
    DISABLE_FEATURE_AVAILABILITY,
} from './mutation-types';
import actions from './actions';

const {
    defineFeature,
    enableFeatureAvailability,
    disableFeatureAvailability,
    setFeatureAvailability,
} = actions;

describe('feature switch', () => {
    describe('store', () => {
        describe('actions', () => {
            describe('enable and disable feature switches', () => {
                let store = {};

                beforeEach(() => {
                    store = {
                        state: {},
                        rootState: {},
                        getters: {},
                        rootGetters: {},
                        commit: jest.fn(),
                        dispatch: jest.fn(),
                    };
                });

                it('should commit a mutation to define feature switch', () => {
                    const name = faker.lorem.words();
                    const enabled = false;

                    defineFeature(store, { name, enabled });

                    expect(store.commit).toHaveBeenCalledWith(DEFINE_FEATURE, { name, enabled });
                });

                it('should commit a mutation to enable a disabled feature switch', () => {
                    const name = faker.lorem.words();
                    const enabled = false;

                    defineFeature(store, { name, enabled });
                    enableFeatureAvailability(store, { name });

                    expect(store.commit).toHaveBeenCalledWith(ENABLE_FEATURE_AVAILABILITY, { name });
                });

                it('should commit a mutation to disable an enabled feature switch', () => {
                    const name = faker.lorem.words();
                    const enabled = true;

                    defineFeature(store, { name, enabled });
                    disableFeatureAvailability(store, { name });

                    expect(store.commit).toHaveBeenCalledWith(DISABLE_FEATURE_AVAILABILITY, { name });
                });
            });

            describe('enable and disable feature switches', () => {
                let store = {};

                beforeEach(() => {
                    store = {
                        state: {
                            features: [
                                { name: faker.lorem.words(), enabled: false },
                                { name: faker.lorem.words(), enabled: false },
                                { name: faker.lorem.words(), enabled: false },
                            ],
                        },
                        rootState: {},
                        getters: {},
                        rootGetters: {},
                        commit: jest.fn(),
                        dispatch: jest.fn(),
                    };
                });

                it('should commit correct mutation to set the availability of a feature switch', () => {
                    const name = faker.lorem.words();

                    setFeatureAvailability(store, { name, enabled: true });
                    expect(store.commit).toHaveBeenCalledWith(ENABLE_FEATURE_AVAILABILITY, { name });

                    setFeatureAvailability(store, { name, enabled: false });
                    expect(store.commit).toHaveBeenCalledWith(DISABLE_FEATURE_AVAILABILITY, { name });
                });
            });
        });
    });
});