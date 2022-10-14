'use strict';


const createReviewModel = (sequelize, DataTypes) => {

    return sequelize.define('Review', {
        content: {
            type : DataTypes.TEXT,
            allowNull :false
        }
    });

}


module.exports = createReviewModel;