'use strict'

const path = require('path')
const fs = require('fs')
const assert = require('assert')

describe('Core Trailpack', () => {
  describe('#configure', () => {
    it('should create missing directories for configured paths', () => {
      assert(fs.statSync(path.resolve(__dirname, 'testdir')))
    })
  })
})

