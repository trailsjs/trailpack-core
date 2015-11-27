'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')
const _ = require('lodash')

module.exports = class Core extends Trailpack {

  constructor (app, config) {
    super(app, require('./config'))
  }

  validate (pkg, config, api) {
    this.app.log.silly(this.config.motd.silly.start)
    this.app.log.info(this.config.motd.info.start)

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
    this.app.once('trails:stop', () => {
      this.app.log.silly(this.config.motd.silly.stop)
      this.app.log.info(this.config.motd.info.stop)
    })
    this.app.once('trails:ready', () => {
      this.app.log.info(this.config.motd.info.ready(this.app))
      this.app.log.debug(this.config.motd.debug.ready(this.app))
      this.app.log.silly(this.config.motd.silly.ready(this.app))

      this.app.log.info(this.config.motd.hr)
    })
    this.app.once('trailpack:all:initialized', () => {
      this.app.log.silly(this.config.motd.silly.initialized)
      this.app.log.info(this.config.motd.info.initialized)
    })

    return Promise.resolve()
  }
}
