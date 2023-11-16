'use strict';

/**
 * daily-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-blog.daily-blog');
