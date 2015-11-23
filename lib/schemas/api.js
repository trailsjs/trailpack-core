const joi = require('joi')

module.exports = joi.object().keys({
  controllers: joi.object().required(),
  services: joi.object().required(),
  models: joi.object().required()
})

