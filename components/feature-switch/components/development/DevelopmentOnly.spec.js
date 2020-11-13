import { shallowMount } from '@vue/test-utils';
import DevelopmentOnly from './DevelopmentOnly.vue';

describe('components', () => {
    describe('common', () => {
        describe('DevelopmentOnly', () => {
            beforeEach(() => {
                process.env = Object.assign(process.env, { NODE_ENV: 'development' });
            });

            it('should return true from isDevelopment computed when in development', () => {
                const wrapper = shallowMount(DevelopmentOnly);

                expect(wrapper.vm.isDevelopment).toBe(true);
            });

            it('should return false from isDevelopment computed when in production', () => {
                process.env = Object.assign(process.env, { NODE_ENV: 'production' });
                const wrapper = shallowMount(DevelopmentOnly);

                expect(wrapper.vm.isDevelopment).toBe(false);
            });
        });
    });
});