const joi = require('joi')

module.exports = joi.object().keys({
  app: joi.object().keys({
    name: joi.string(),
    trailpacks: joi.array(),
    paths: joi.object().keys({
      root: joi.string().required()
    })
  }),

  env: joi.object().keys({
    development: joi.object().required(),
    production: joi.object().required(),
    staging: joi.object(),
    testing: joi.object()
  })
}).unknown()
