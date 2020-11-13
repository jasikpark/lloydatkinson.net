import isDevelopment from './is-development';

describe('components', () => {
    describe('common', () => {
        describe('is-development.js', () => {
            beforeEach(() => {
                process.env = Object.assign(process.env, { NODE_ENV: 'development' });
            });

            it('should return true when in development', () => {
                expect(isDevelopment()).toBe(true);
            });

            it('should return false when not in development', () => {
                process.env = Object.assign(process.env, { NODE_ENV: 'production' });
                expect(isDevelopment()).toBe(false);
            });
        });
    });
});