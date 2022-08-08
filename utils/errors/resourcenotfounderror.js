const NotFoundError = require('./notfounderror');

const resourceNotFoundError = (req, res, next) => {
  next(new NotFoundError('Requested resource not found.'));
};

export default resourceNotFoundError;
