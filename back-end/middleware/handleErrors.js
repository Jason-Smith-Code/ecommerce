// Check: http://expressjs.com/en/guide/error-handling.html

const notFound = (request, response, next) => {
    // throw new error
    const error = new Error(`Not found : ${request.originalUrl}`);
    // set status
    response.status(404);
    next(error)
  }

const errorHandler = (err, request, response, next) => {
    // May get 200 responses even though there is an error, convert 200 to a 500 response
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
    response.status(statusCode);
    response.json({
      message: err.message,
      // hide stack information if site is in production mode (NODE_ENV)
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  }

  export {notFound, errorHandler};