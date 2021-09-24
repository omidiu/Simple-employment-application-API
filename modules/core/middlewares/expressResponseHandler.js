const expressResponsehandler = (req, res, next) => {
  const handlers = {
    success: (data, statusCode) => {
      res.status(statusCode).json({
        success: true,
        data,
      });
    },
  };
  Object.assign(res, handlers);
  next();
};

module.exports = expressResponsehandler;
