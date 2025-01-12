const errorMsg = require("../constants/errorMsg");

exports.validateTodoData = (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    throw new Error(errorMsg.NO_DESCRIPTION);
  }

  req.body = description;
  next();
};
