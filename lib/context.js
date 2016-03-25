'use strict'

const _ = require('lodash')

const Context = module.exports = {

  reservedMethods: [
    'app',
    'api',
    'log',
    '__',
    'constructor',
    'undefined',
    'methods',
    'config',
    'schema'
  ],

  /**
   * Traverse protoype chain and aggregate all class method names
   */
  getClassMethods (obj) {
    const props = [ ]
    const objectRoot = new Object()

    while (!obj.isPrototypeOf(objectRoot)) {
      Object.getOwnPropertyNames(obj).forEach(prop => {
        if (props.indexOf(prop) === -1 &&
            !_.includes(Context.reservedMethods, prop) &&
            _.isFunction(obj[prop])) {

          props.push(prop)
        }
      })
      obj = Object.getPrototypeOf(obj)
    }

    return props
  },

  /**
   * Bind the context of API resource methods.
   */
  bindMethods (app, resource) {
    return _.mapValues(app.api[resource], (Resource, resourceName) => {
      if (_.isPlainObject(Resource)) {
        throw new Error(`${resourceName} should be a class. It is a regular object`)
      }

      const obj = new Resource(app)

      obj.methods = Context.getClassMethods(obj)
      _.each(obj.methods, method => {
        obj[method] = obj[method].bind(obj)
      })
      return obj
    })
  }
}
