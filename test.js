'use strict'

const test = require('tape')
const os = require('os')
const arch = require('.')

test('usually the same as os.arch()', function (t) {
  os.arch = () => 'foo'
  t.is(arch(), 'foo')
  t.end()
})

test('arm64 resolves to armv8', function (t) {
  os.arch = () => 'arm64'
  t.is(arch(), 'armv8')
  t.end()
})

test('arm resolves to armv<version>', function (t) {
  os.arch = () => 'arm'
  process.config.variables.arm_version = 7
  t.is(arch(), 'armv7')
  process.config.variables.arm_version = 6
  t.is(arch(), 'armv6')
  t.end()
})

test('arm throws if process.config.variables.arm_version is missing', function (t) {
  t.plan(1)

  os.arch = () => 'arm'
  process.config.variables.arm_version = ''

  try {
    arch()
  } catch (err) {
    t.is(err.message, 'Could not detect ARM version')
  }
})
