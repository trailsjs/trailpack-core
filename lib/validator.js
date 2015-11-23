const joi = require('joi')

const packageSchema = require('./schemas/package')
const configSchema = require('./schemas/config')
const apiSchema = require('./schemas/api')

module.exports = {
  validatePackage (pkg) {
    return new Promise((resolve, reject) => {
      joi.validate(pkg, packageSchema, (err, value) => {
        if (err) return reject(err)
        return resolve(value)
      })
    })
  },

  validateConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, configSchema, (err, value) => {
        if (err) return reject(err)
        return resolve(value)
      })
    })
  },

  validateApi (api) {
    return new Promise((resolve, reject) => {
      joi.validate(api, apiSchema, (err, value) => {
        if (err) return reject(err)
        return resolve(value)
      })
    })
  }
}
