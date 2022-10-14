"use strict";

class GenericError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}
function genericErrorHandler(error, req, res, next) {
  console.log("geneeeee");
  const { message, status } = error;
  res.status(status).json(message);
}

function notFoundHandler(req, res, next) {
   const notFoundError = new GenericError('page not found', 404);
   console.log(notFoundError.message);
   res.status(404).send(notFoundError);
}

module.exports = { 
    GenericError, 
    genericErrorHandler,
    notFoundHandler 
};
