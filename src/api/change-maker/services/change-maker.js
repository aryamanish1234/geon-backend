'use strict';

/**
 * change-maker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::change-maker.change-maker');
