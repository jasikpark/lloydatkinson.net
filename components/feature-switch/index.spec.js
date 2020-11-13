import getFeatures from './load-feature-switches';

jest.mock('./environments/features.development.json', () => ({
    development: true,
}));
jest.mock('./environments/features.testing.json', () => ({
    testing: true,
}));
jest.mock('./environments/features.staging.json', () => ({
    staging: true,
}));
jest.mock('./environments/features.production.json', () => ({
    production: true,
}));

describe('feature switch', () => {
    describe('functions', () => {
        describe('index.js', () => {
            test.each([
                [{ production: false, testing: false }, { development: true }], // development
                [{ production: true, testing: false }, { staging: true }], // staging
                [{ production: true, testing: true }, { testing: true }], // testing
                [{ production: false }, { production: true }], // production
            ])('[%s] host environment should have feature flags defined as [%o]', (environment, expected) => {
                const features = getFeatures(environment);
                expect(features).toStrictEqual(expected);
            });
        });
    });
});