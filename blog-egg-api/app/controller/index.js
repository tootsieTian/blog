'use strict';

const BaseController = require('./base');

class IndexController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'index';
  }
}

module.exports = IndexController;
