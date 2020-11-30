import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

describe('components', () => {
    describe('common', () => {
        describe('Button.vue', () => {
            const buttonText = 'Button Text';

            it('should render the default slot', () => {
                const wrapper = shallowMount(Button, {
                    slots: {
                        default: buttonText,
                    },
                });

                expect(wrapper.text()).toBe(buttonText);
            });

            it('should emit listeners correctly', () => {
                const onClick = jest.fn();
                const wrapper = shallowMount(Button, {
                    listeners: {
                        click: onClick,
                    },
                });

                wrapper.find('button').trigger('click');
                expect(onClick).toHaveBeenCalled();
            });
        });
    });
});