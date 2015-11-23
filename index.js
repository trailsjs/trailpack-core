'use strict'

const Trailpack = require('trailpack')
const TrailsApp = require('trails-app')
const lib = require('./lib')

module.exports = class Core extends Trailpack {
  configure (config, pkg) {
    return Promise.all([
      lib.Validator.validatePackage(pkg),
      lib.Validator.validateConfig(config)
    ])
  }

  initialize (api) {
    return lib.Validator.validateApi(api)
  }
}
