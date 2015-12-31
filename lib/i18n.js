const i18next = require('i18next')

module.exports = {
  init (app) {
    return new Promise((resolve, reject) => {
      i18next.init(app.config.i18n, (err, t) => {
        if (err) return reject(err)

        i18next.t = i18next.t.bind(i18next)
        resolve(i18next)
      })
    })
  }
}
