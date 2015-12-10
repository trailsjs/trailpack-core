'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')
const _ = require('lodash')

/**
 * Core Trailpack
 *
 * Validate api, config, and pkg definitions; merge configuration setings; bind
 * event handlers/logging.
 */
module.exports = class Core extends Trailpack {

  validate () {
    this.app.log.info(this.app.config.motd.info.start)

    return Promise.all([
      lib.Validator.validatePackage(this.app.pkg),
      lib.Validator.validateConfig(this.app.config),
      lib.Validator.validateApi(this.app.api)
    ])
  }

  /**
   * Merge environment-specific configuration
   */
  configure () {
    _.merge(this.app.config, this.app.config.env[process.env.NODE_ENV])
  }

  /**
   * Listen for key app events, and bind context for API resources
   */
  initialize () {
    this.app.once('trails:stop', () => {
      this.app.log.silly(this.app.config.motd.silly.stop)
      this.app.log.info(this.app.config.motd.info.stop)
    })
    this.app.once('trails:ready', () => {
      this.app.log.info(this.app.config.motd.info.ready(this.app))
      this.app.log.debug(this.app.config.motd.debug.ready(this.app))
      this.app.log.silly(this.app.config.motd.silly.ready(this.app))

      this.app.log.info(this.app.config.motd.hr)
    })
    this.app.once('trailpack:all:initialized', () => {
      this.app.log.silly(this.app.config.motd.silly.initialized)
      this.app.log.info(this.app.config.motd.info.initialized)
    })

    lib.Context.bindControllers(this.app)
    lib.Context.bindServices(this.app)
    lib.Context.bindPolicies(this.app)
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      pkg: require('./package')
    })
  }
}
