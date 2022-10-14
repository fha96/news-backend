"use strict";

class CrudCollection {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: id });
      } else {
        return await this.model.findAll();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      console.log(error.message);
    }
  }
  async update(id, obj) {
    try {
      return await this.model.update(obj, { where: id });
    } catch (error) {
      console.log(error.message);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({ where: id });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CrudCollection;
