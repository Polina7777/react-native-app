'use strict';

/**
 * extra-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extra-info.extra-info');
