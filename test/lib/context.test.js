'use strict'

const _ = require('lodash')
const assert = require('assert')
const lib = require('../../lib')

describe('lib.Context', () => {
  describe('#getClassMethods', () => {
    const A = class A {
      foo () { }
    }
    const B = class B extends A {
      bar () { }
    }
    it('should return class methods for object', () => {
      const methods = lib.Context.getClassMethods(new A())

      assert.equal(methods.length, 1)
      assert.equal(methods[0], 'foo')
    })
    it('should return class methods for all objects in prototype chain', () => {
      const methods = lib.Context.getClassMethods(new B())

      assert.equal(methods.length, 2)
      assert(_.contains(methods, 'foo'))
      assert(_.contains(methods, 'bar'))
    })
  })
})
