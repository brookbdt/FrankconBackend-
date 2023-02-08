'use strict';

/**
 * workshop-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workshop-task.workshop-task');
