const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  hashpassword: Joi.string().min(8).required(),
  confirmpassword: Joi.string().min(8),
});

const validateUser = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};
module.exports = validateUser;
