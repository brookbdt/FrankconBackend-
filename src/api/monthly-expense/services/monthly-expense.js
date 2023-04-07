'use strict';

/**
 * monthly-expense service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly-expense.monthly-expense');
