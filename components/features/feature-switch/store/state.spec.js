import state from './state';

describe('feature switch', () => {
    describe('store', () => {
        describe('state', () => {
            it('should have expected default empty state', () => {
                expect(state().features.length).toBe(0);
            });
        });
    });
});