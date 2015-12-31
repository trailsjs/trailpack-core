module.exports = {
  bindMotdInitialize (app) {
    app.once('trails:stop', () => {
      app.log.silly(app.config.motd.silly.stop)
      app.log.info(app.config.motd.info.stop)
    })
    app.once('trails:ready', () => {
      app.log.info(app.config.motd.info.ready(app))
      app.log.debug(app.config.motd.debug.ready(app))
      app.log.silly(app.config.motd.silly.ready(app))

      app.log.info(app.config.motd.hr)
    })
    app.once('trailpack:all:initialized', () => {
      app.log.silly(app.config.motd.silly.initialized)
      app.log.info(app.config.motd.info.initialized)
    })
  }

}
