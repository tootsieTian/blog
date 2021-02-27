'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/login', controller.user.login);
  router.resources('article', '/api/article', controller.article);
  router.resources('index', '/api/index', controller.index);
  router.resources('web', '/api/web', controller.web);
  router.resources('work', '/api/work', controller.work);
  router.resources('comment', '/api/comment', controller.comment);
};
