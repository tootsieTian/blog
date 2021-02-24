'use strict';

const BaseService = require('./base');

class WebService extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'web';
  }
}

module.exports = WebService;
