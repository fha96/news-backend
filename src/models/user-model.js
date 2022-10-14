'use strict';

const createUserModel = (sequelize, DataTypes) => {

   return sequelize.define('User', {
    username: DataTypes.STRING,
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            isEmail: true
        },
        unique: true
    },
    password : {
        type : DataTypes.STRING,
        allowNull:false
    }
   });
}

module.exports = createUserModel;