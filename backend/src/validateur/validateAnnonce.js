const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  numeroOffre: Joi.string().required(),
  imageToUrl: Joi.string().required(),
  imageToUrl2: Joi.string().required(),
  imageToUrl3: Joi.string().required(),
  imageToUrl4: Joi.string().required(),
  imageToUrl5: Joi.string().required(),
  adresse: Joi.string().required(),
  descriptif: Joi.string().required(),
  disponibilite: Joi.string().required(),
});

const validateAnnonce = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};
module.exports = validateAnnonce;
