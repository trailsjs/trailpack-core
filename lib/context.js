'use strict'

const _ = require('lodash')

module.exports = {

  bindControllers (app) {
    const controllers = app.api.controllers

    _.each(controllers, controller => {
      _.each(_.functions(controller), method => {
        controller[method] = controller[method].bind(app)
      })
    })
  },

  bindServices (app) {
    const services = app.api.services

    _.each(services, service => {
      _.each(_.functions(_.omit(service, 'inspect')), method => {
        service[method] = service[method].bind(app)
      })
    })
  },

  bindPolicies (app) {
    const policies = app.api.policies

    _.each(policies, policy => {
      if (_.isFunction(policy)) {
        policy.bind(app)
      }
      else {
        _.each(_.functions(policy), method => {
          policy[method] = policy[method].bind(app)
        })
      }
    })

  }
}
