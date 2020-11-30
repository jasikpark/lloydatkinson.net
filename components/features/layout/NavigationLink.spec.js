
import { expect, jest } from '@jest/globals';
import { mount, shallowMount } from '@vue/test-utils';
import NavigationLink from './NavigationLink.vue';

describe('layout', () => {
    describe('components', () => {
        describe('NavigationLink.vue', () => {
            const makeNuxtLink = (values = {}) => {
                const defaultOptions = { navigate: jest.fn }
                return {
                    render () {
                        return this.$scopedSlots.default({ ...values, ...defaultOptions })
                    }
                }
            };

            it('should render a link to the given route and contain the default slot content', () => {
                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '/test' })
                    },
                    propsData: {
                        to: '/test'
                    },
                });

                expect(wrapper.text()).toBe('/test');
            });

            it('should render a link to the given route and contain the given slot content', () => {
                const navigationLinkTest = 'Navigation Link';

                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '/test' })
                    },
                    propsData: {
                        to: '/test'
                    },
                    slots: {
                        default: navigationLinkTest,
                    }
                });

                expect(wrapper.text()).toBe(navigationLinkTest);
            });

            it('should return default active class from computed when active class prop is not set', () => {
                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '/test' })
                    },
                    propsData: {
                        to: '/test'
                    },
                });

                expect(wrapper.vm.style.active).toBe('text-black');
            });

            it('should return specified active class from computed when active class prop is set', () => {
                const activeClass = 'active class';
                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '/test' })
                    },
                    propsData: {
                        to: '/test',
                        activeClass: activeClass
                    },
                });

                expect(wrapper.vm.style.active).toBe(activeClass);
            });

            it('should return default inactive class from computed when inactive class prop is not set', () => {
                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '/test' })
                    },
                    propsData: {
                        to: '/test'
                    },
                });

                expect(wrapper.vm.style.inactive).toBe('text-gray-600');
            });

            it('should return specified inactive class from computed when inactive class prop is set', () => {
                const inactiveClass = 'inactive class';

                const wrapper = mount(NavigationLink, {
                    stubs: {
                        'NuxtLink': makeNuxtLink({ isActive: true, href: '/test' })
                    },
                    propsData: {
                        to: '/test',
                        inactiveClass: inactiveClass
                    },
                });

                expect(wrapper.vm.style.inactive).toBe(inactiveClass);
            });
        });
    });
});