'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/blog', controller.blog.index);
  router.get('/', controller.home.index);
  router.get('/', controller.home.index);
  router.get('/', controller.home.index);
  
  router.post('/api/login', controller.admin.login); //登录



};
