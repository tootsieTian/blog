'use strict';

const BaseController = require('./base');

class ArticleController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'article';
  }
}

module.exports = ArticleController;
