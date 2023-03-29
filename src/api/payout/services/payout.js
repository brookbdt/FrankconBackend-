'use strict';

/**
 * payout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payout.payout');
