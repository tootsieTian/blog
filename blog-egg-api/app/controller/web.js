'use strict';

const BaseController = require('./base');

class WebController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'web';
  }
}

module.exports = WebController;
