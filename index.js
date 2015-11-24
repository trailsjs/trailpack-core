'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')
const _ = require('lodash')

module.exports = class Core extends Trailpack {

  getName () {
    return 'core'
  }

  validate (pkg, config, api) {
    return Promise.all([
      lib.Validator.validatePackage(pkg),
      lib.Validator.validateConfig(config),
      lib.Validator.validateApi(api)
    ])
  }

  /**
   * Merge environment-specific configuration
   */
  configure () {
    Object.assign(this.app.config, this.app.config.env[process.env.NODE_ENV])
    return Promise.resolve()
  }

  initialize () {
    return Promise.resolve()
  }
}
