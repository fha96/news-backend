'use strict'; 



const createNewsModel = (sequelize, DataTypes) => {

  return sequelize.define('New', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type : DataTypes.TEXT,
            allowNull : false
        }
    })
}

module.exports = createNewsModel;