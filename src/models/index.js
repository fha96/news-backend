"use strict";

const {
  Sequelize,
  DataTypes,
  sequelizeOptions,
  DATABASE_URL,
} = require("../config");
const CrudCollection = require('../collections/crud-methods');
const createNewsModel = require('./news-model');
const createReviewModel = require('./reviews-model');
const createUserModel = require('./user-model');


// connect with data base
const sequelize = new Sequelize(
  DATABASE_URL
  // sequelizeOptions
);

const newsModel = createNewsModel(sequelize, DataTypes);
const reviewModel = createReviewModel(sequelize, DataTypes);
const userModel = createUserModel(sequelize, DataTypes);

const News = new CrudCollection(newsModel);
const Reviews = new CrudCollection(reviewModel);
const Users = new CrudCollection(userModel);



module.exports = {
  sequelize,
  News,
  Users,
  Reviews
};
