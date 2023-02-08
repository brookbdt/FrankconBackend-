'use strict';

/**
 * tag-registration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag-registration.tag-registration');
