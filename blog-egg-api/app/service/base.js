'use strict';

const { Service } = require('egg');

class BaseService extends Service {
  async list(pageSum, pageSize, where) {
    const data = await this.app.mysql.select(this.entity, {
      where,
      order: [[ 'id', 'asc' ]], // 每个字段的排序
      offset: (pageSum - 1) * pageSize, // 起始索引
      limit: pageSize, //  条数限制
    });
    const total = await this.app.mysql.count(this.entity, where);
    return { data, total };
  }

  async create(entity) {
    const result = await this.app.mysql.insert(this.entity, entity);
    return result.affectedRows > 0;
  }

  async update(entity) {
    const result = await this.app.mysql.update(this.entity, entity);
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const result = await this.app.mysql.delete(this.entity, { id });
    return result.affectedRows > 0;
  }
}

module.exports = BaseService;
