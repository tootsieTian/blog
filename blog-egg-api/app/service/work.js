'use strict';

const BaseService = require('./base');

class WorkService extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'work';
  }
}

module.exports = WorkService;
