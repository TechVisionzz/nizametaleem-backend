'use strict';

/**
 * approle router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::approle.approle');
