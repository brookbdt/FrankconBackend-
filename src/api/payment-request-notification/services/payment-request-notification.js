'use strict';

/**
 * payment-request-notification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-request-notification.payment-request-notification');
