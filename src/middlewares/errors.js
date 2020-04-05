const errors = () => (err, req, res, next) => {
  const { statusCode, message } = err;

  const error = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
  }[statusCode];

  if (!error) {
    next(err);
  }

  const result = {
    statusCode,
    error,
    message,
  };

  return res.status(statusCode).send(result);
};

module.exports = {
  errors,
};
