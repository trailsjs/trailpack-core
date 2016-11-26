'use strict'

const Trailpack = require('trailpack')

/**
 * Core Trailpack
 *
 * @deprecated
 */
module.exports = class Core extends Trailpack {

  validate () {
  }

  configure () {
  }

  initialize () {
    this.app.log.warn('trailpack-core is deprecated and will be removed in Trails 3.0')
    this.app.log.warn('trailpack-core 2.x does nothing except print this warning')
    this.app.log.warn('Remove trailpack-core from config.main.packs to silence this warning')
  }

  constructor (app) {
    super(app, {
      config: { },
      pkg: require('./package')
    })
  }
}

