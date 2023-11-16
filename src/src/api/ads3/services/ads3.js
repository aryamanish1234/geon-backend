'use strict';

/**
 * ads3 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ads3.ads3');
