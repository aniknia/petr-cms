'use strict';

/**
 * petr service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::petr.petr');
