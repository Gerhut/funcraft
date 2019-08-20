'use strict';
const { getTpl } = require('../tpl');
const { findServices } = require('../definition');
const { red } = require('colors');

async function getDefaultService(tplPath) {
  const tpl = await getTpl(tplPath);
  const services = findServices(tpl.Resources);

  if (services.length === 1) {
    return services[0].serviceName;
  }
  throw new Error(red('There should be one and only one service in your template.[yml|yaml].'));
}

module.exports = { getDefaultService };