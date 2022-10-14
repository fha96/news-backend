'use strict';

const {News} = require('../models/index');
const {GenericError} = require('./errorControllers');



const getAllNews =async (req, res, next) => {
    try {
        const news = await News.read();
        res.status(200).send(news);
    } catch (error) {
        next(new GenericError(error.message, 500));
    }
}


module.exports = {
    getAllNews
}