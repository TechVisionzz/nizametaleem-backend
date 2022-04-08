'use strict';

/**
 *  approle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::approle.approle');
