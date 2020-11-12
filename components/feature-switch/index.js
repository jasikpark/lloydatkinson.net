import developmentFeatures from './environments/features.development.json';
import testingFeatures from './environments/features.testing.json';
import stagingFeatures from './environments/features.staging.json';
import productionFeatures from './environments/features.production.json';

export default (environment) => (
    getFeatures({
        features: {
            development: developmentFeatures,
            testing: testingFeatures,
            staging: stagingFeatures,
            production: productionFeatures,
        },
        environment,
    })
);