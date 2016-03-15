'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

/**
 * Core Trailpack
 *
 * Validate api, config, and pkg definitions; merge configuration setings; bind
 * event handlers/logging.
 */
module.exports = class Core extends Trailpack {

  validate () {
    if (!this.app.config.log.logger) {
      throw new Error('config.log.logger is not set.')
    }

    return Promise.all([
      lib.Validator.validatePackage(this.app.pkg),
      lib.Validator.validateConfig(this.app.config),
      lib.Validator.validateApi(this.app.api)
    ])
  }

  configure () {
    this.app.controllers = lib.Context.bindMethods(this.app, 'controllers')
    this.app.policies = lib.Context.bindMethods(this.app, 'policies')
    this.app.services = lib.Context.bindMethods(this.app, 'services')
    this.app.models = lib.Context.bindMethods(this.app, 'models')
  }

  /**
   * Listen for key app events, and bind context for API resources
   */
  initialize () {
    lib.Motd.bindMotdInitialize(this.app)

    return lib.i18n.init(this.app).then(i18n => {
      this.i18n = i18n
      Object.defineProperty(this.app, '__', {
        value: i18n.t,
        writable: false,
        configurable: true
      })
      this.app.emit('i18n:ready')
    })
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      pkg: require('./package')
    })

    if (!this.app.config.i18n) {
      this.app.config.i18n = { }
    }
    if (!this.app.config.log) {
      this.app.config.log = { }
    }
  }
}

