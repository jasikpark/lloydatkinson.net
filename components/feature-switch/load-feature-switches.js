import developmentFeatures from './environments/features.development.js';
import productionFeatures from './environments/features.production.js';

export default (environment) => (
    getFeatures({
        features: {
            development: developmentFeatures,
            production: productionFeatures,
        },
        environment,
    })
);