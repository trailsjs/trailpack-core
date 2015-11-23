'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

module.exports = class Core extends Trailpack {
  validate (pkg, config, api) {
    return Promise.all([
      lib.Validator.validatePackage(pkg),
      lib.Validator.validateConfig(config),
      lib.Validator.validateApi(api)
    ])
  }
}
