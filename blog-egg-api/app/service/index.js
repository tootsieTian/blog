'use strict';

const BaseService = require('./base');

class IndexService extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'index';
  }
}

module.exports = IndexService;
