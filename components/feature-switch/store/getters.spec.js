import faker from 'faker';
import getters from './getters';

const {
    features,
} = getters;

describe('feature switch', () => {
    describe('store', () => {
        describe('getters', () => {
            it('should get all defined feature switches', () => {
                const state = {
                    features: [
                        { name: faker.lorem.words(), enabled: false },
                        { name: faker.lorem.words(), enabled: false },
                        { name: faker.lorem.words(), enabled: false },
                    ],
                };

                expect(features(state).length).toBe(3);
            });
        });
    });
});