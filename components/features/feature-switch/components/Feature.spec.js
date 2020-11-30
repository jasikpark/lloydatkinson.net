import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import faker from 'faker';

import Feature from './Feature.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        FeatureSwitchModule: {
            namespaced: true,
            state: {
                features: [
                    { name: 'Feature1', enabled: true },
                    { name: 'Feature2', enabled: false },
                    { name: 'Feature3', enabled: false },
                ],
            },
            getters: {
                features: (state) => state.features,
            },
        },
    },
});

describe('feature switch', () => {
    describe('component', () => {
        describe('Feature.vue', () => {
            it('should return true from enabled computed when the specified feature switch is enabled', () => {
                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: 'Feature1',
                    },
                });

                expect(wrapper.vm.enabled).toBe(true);
            });

            it('should render default slot when the specified feature switch is enabled', () => {
                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: 'Feature1',
                    },
                    slots: {
                        default: '<div>enabled</div>',
                        disabled: '<div>disabled</div>',
                    },
                });

                expect(wrapper.text()).toBe('enabled');
            });

            it('should return false from enabled computed when the specified feature switch is enabled', () => {
                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: 'Feature2',
                    },
                });

                expect(wrapper.vm.enabled).toBe(false);
            });

            it('should render disabled slot when the specified feature switch is enabled', () => {
                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: 'Feature2',
                    },
                    slots: {
                        default: '<div>enabled</div>',
                        disabled: '<div>disabled</div>',
                    },
                });

                expect(wrapper.text()).toBe('disabled');
            });

            it('should return false from enabled computed when the specified feature is defined', () => {
                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: faker.lorem.words(),
                    },
                });

                expect(wrapper.vm.enabled).toBe(false);
            });

            it('should render disabled slot when the specified feature switch is not defined', () => {
                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: faker.lorem.words(),
                    },
                    slots: {
                        default: '<div>enabled</div>',
                        disabled: '<div>disabled</div>',
                    },
                });

                expect(wrapper.text()).toBe('disabled');
            });

            it('should log a warning to the console when an unknown feature switch is used in development', () => {
                process.env = Object.assign(process.env, { NODE_ENV: 'development' });

                const originalWarn = console.warn;
                console.warn = jest.fn();

                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: faker.lorem.words(),
                    },
                });

                expect(console.warn).toHaveBeenCalledTimes(1);

                console.warn = originalWarn;
            });

            it('should not log a warning to the console when an unknown feature switch is used outside of development', () => {
                process.env = Object.assign(process.env, { NODE_ENV: 'production' });

                const originalWarn = console.warn;
                console.warn = jest.fn();

                const wrapper = shallowMount(Feature, {
                    localVue,
                    store,
                    propsData: {
                        name: faker.lorem.words(),
                    },
                });

                expect(console.warn).not.toHaveBeenCalled();

                console.warn = originalWarn;
            });
        });
    });
});