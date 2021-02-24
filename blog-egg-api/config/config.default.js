/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614067978509_2918';

  // add your middleware config here
  config.middleware = [];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
      domainWhiteList: [ 'http://localhost:8081' ], // 允许跨域域名白名单
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  userConfig.jwtSecret = 'tootsie';
  // 配置数据库
  userConfig.mysql = {
    client: {
      // host
      host: 'localhost',
      // portn
      port: '3306',
      // username
      user: 'admin',
      // password
      password: '123456ccc',
      // database
      database: 'blog',
    },
  };
  userConfig.jwtSecret = 'tootsie';
  return {
    ...config,
    ...userConfig,
  };
};
