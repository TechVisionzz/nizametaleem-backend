'use strict';

/**
 * approle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::approle.approle');
