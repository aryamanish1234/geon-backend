'use strict';

/**
 * garden-farming service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::garden-farming.garden-farming');
