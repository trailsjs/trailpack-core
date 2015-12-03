'use strict'

const _ = require('lodash')

module.exports = {

  bindControllers (app) {
    const controllers = app.api.controllers

    _.each(controllers, controller => {
      _.each(_.functions(controller), method => {
        controller[method] = _.bind(controller[method], app)
      })
    })
  },

  bindServices (app) {
    const services = app.api.services

    _.each(services, service => {
      _.each(_.functions(_.omit(service, 'inspect')), method => {
        service[method] = _.bind(service[method], app)
      })
    })
  },

  bindPolicies (app) {
    const policies = app.api.policies

    _.each(policies, policy => {
      if (_.isFunction(policy)) {
        _.bind(policy, app)
      }
      else {
        _.each(_.functions(policy), method => {
          policy[method] = _.bind(policy[method], app)
        })
      }
    })

  }
}
