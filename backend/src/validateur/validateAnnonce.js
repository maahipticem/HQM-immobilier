const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number(),
  id_city: Joi.number(),
  city: Joi.string(),
  name: Joi.string().required(),
  numeroOffre: Joi.string().required(),
  imageToUrl: Joi.string().required(),
  imageToUrl2: Joi.string().required(),
  imageToUrl3: Joi.string().required(),
  imageToUrl4: Joi.string().required(),
  imageToUrl5: Joi.string().required(),
  adresse: Joi.string().required(),
  descriptif: Joi.string().required(),
  descriptif2: Joi.string().required(),
  descriptif3: Joi.string().required(),
  disponibilite: Joi.string(),
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
