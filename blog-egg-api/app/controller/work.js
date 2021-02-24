'use strict';

const BaseController = require('./base');

class WorkController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'work';
  }
}

module.exports = WorkController;
