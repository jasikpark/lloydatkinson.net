
import { expect, jest } from '@jest/globals';
import { mount, shallowMount } from '@vue/test-utils';
import NavigationLink from './NavigationLink.vue';

describe('layout', () => {
    describe('components', () => {
        describe('NavigationLink.vue', () => {
            const makeNuxtLink = (values = {}) => {
                const defaultOpts = { navigate: jest.fn }
                return {
                    render () {
                        return this.$scopedSlots.default({ ...values, ...defaultOpts })
                    }
                }
            };

            it('should render a link to the given route and contain the default slot content', () => {
                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '' })
                    },
                    propsData: {
                        to: '/test'
                    },
                    slots: {
                        default: '<span>Hello</span>'
                    }
                });

                console.log(wrapper.html())
                expect(wrapper.text()).toBe('Hello');
            });

            it('should render a link to the given route and contain the given slot content', () => {
                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, navigate: jest.fn, href: '' })
                    },
                    propsData: {
                        to: '/test'
                    }
                })
            });
        });
    });
});