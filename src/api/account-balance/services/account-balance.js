'use strict';

/**
 * account-balance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::account-balance.account-balance');
