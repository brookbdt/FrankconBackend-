'use strict';

/**
 * payin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payin.payin');
