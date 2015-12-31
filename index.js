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
    this.app.log.info(this.app.config.motd.info.start)

    return Promise.all([
      lib.Validator.validatePackage(this.app.pkg),
      lib.Validator.validateConfig(this.app.config),
      lib.Validator.validateApi(this.app.api)
    ])
  }

  /**
   * Listen for key app events, and bind context for API resources
   */
  initialize () {
    lib.Motd.bindMotdInitialize(this.app)

    lib.Context.bindControllers(this.app)
    lib.Context.bindServices(this.app)
    lib.Context.bindPolicies(this.app)

    return lib.i18n.init(this.app).then(i18n => {
      this.i18n = i18n
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
  }
}

