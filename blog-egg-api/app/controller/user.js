'use strict';

const BaseController = require('./base');
const { sign } = require('jsonwebtoken');

class UserController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'user';
  }

  async login() {
    const { ctx, config, app } = this;
    const { username, password } = ctx.request.body;
    const result = await app.mysql.select('user', {
      where: { username, password },
      limit: 1,
    });
    if (result && result.length > 0) {
      const u = Object.assign({}, result[0]);
      delete u.password;
      this.success('', sign(u, config.jwtSecret, { expiresIn: '30day' })); // 返回token，token为明文，不要把密码放入token
    } else {
      this.error('登录失败！');
    }
  }
}

module.exports = UserController;
