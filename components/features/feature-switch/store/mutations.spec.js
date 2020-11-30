import faker from 'faker';

import mutations from './mutations';

const {
    DEFINE_FEATURE,
    ENABLE_FEATURE_AVAILABILITY,
    DISABLE_FEATURE_AVAILABILITY,
} = mutations;

describe('feature switch', () => {
    describe('store', () => {
        describe('mutations', () => {
            it('should define feature switches', () => {
                const state = { features: [] };

                const name = faker.lorem.words();
                const enabled = false;

                DEFINE_FEATURE(state, { name, enabled });

                expect(state.features.length).toBe(1);
                expect(state.features[0].name).toBe(name);
            });

            it('should enable feature switches and preserve existing feature switches', () => {
                const state = {
                    features: [
                        { name: faker.lorem.words(), enabled: false },
                        { name: faker.lorem.words(), enabled: false },
                        { name: faker.lorem.words(), enabled: true },
                    ],
                };

                ENABLE_FEATURE_AVAILABILITY(state, { name: state.features[1].name });

                expect(state.features[0].enabled).toBe(false);
                expect(state.features[1].enabled).toBe(true);
                expect(state.features[2].enabled).toBe(true);
            });

            it('should disable feature switches and preserve existing feature switches', () => {
                const state = {
                    features: [
                        { name: faker.lorem.words(), enabled: false },
                        { name: faker.lorem.words(), enabled: true },
                        { name: faker.lorem.words(), enabled: true },
                    ],
                };

                DISABLE_FEATURE_AVAILABILITY(state, { name: state.features[1].name });

                expect(state.features[0].enabled).toBe(false);
                expect(state.features[1].enabled).toBe(false);
                expect(state.features[2].enabled).toBe(true);
            });
        });
    });
});