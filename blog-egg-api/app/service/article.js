'use strict';

const BaseService = require('./base');

class ArticleService extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'article';
  }
}

module.exports = ArticleService;
