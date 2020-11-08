import { mount } from '@vue/test-utils'

import Layout from './Layout'

describe('layouts', () => {
    describe('components', () => {
        describe('Layout.vue', () => {
            it('should render', () => {
                const wrapper = mount(Layout)
                expect(wrapper.vm).toBeTruthy()
            })
        })
    })
})