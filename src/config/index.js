"use strict";
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const cors = require("cors");
const sequelizeOptions = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
module.exports = {
  Sequelize,
  DataTypes,
  express,
  cors,
  sequelizeOptions,
  PORT :process.env.PORT || 3005 ,
  DATABASE_URL: process.env.DATABASE_URL
};
