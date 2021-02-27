'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async index() { // GET请求
    /**
     * @ctx:上下文对象，用于返回请求
     * @service:服务层，用于处理业务逻辑
     */
    const { service } = this;
    const { pageSum, pageSize, ...where } = this.ctx.query;
    const list = await service[this.entity].list(isNaN(pageSum) ? 1 : parseInt(pageSum),
      isNaN(pageSize) ? 10 : parseInt(pageSize), where);

    this.success(list);
  }
  async create() { // POST请求
    const { ctx, service } = this;
    const entity = ctx.request.body;
    const result = await service[this.entity].create(entity);
    result ? this.success('创建成功') : this.error('创建失败');
  }
  async update() { // PUT请求
    const { ctx, service } = this;
    const id = ctx.params.id; // url参数：api/user/1   id为1
    const entity = ctx.request.body; // post参数
    entity.id = id;
    const result = await service[this.entity].update(entity);
    result ? this.success('更新成功') : this.error('更新失败');
  }
  async destroy() { // DELETE请求
    const { ctx, service } = this;
    console.log("params：",ctx.params)
    const id = ctx.params.id;
    const result = await service[this.entity].destroy(id);
    result ? this.success('删除成功') : this.error('删除失败');
  }
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }
  error(error) {
    this.ctx.body = {
      code: 1,
      error,
    };
  }
}

module.exports = BaseController;
