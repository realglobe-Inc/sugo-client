/**
 * Test case for sugoClient.
 * Runs with mocha.
 */
'use strict'

const SugoClient = require('../lib/sugo_client.js')
const sgSocket = require('sg-socket')
const assert = require('assert')
const aport = require('aport')
const asleep = require('asleep')
const co = require('co')

describe('sugo-client', function () {
  this.timeout(13000)
  let io, port
  before(() => co(function * () {
    port = yield aport()
    io = sgSocket(port)
    io.on('connection', (socket) => {
      socket.on('foo', (data) => {
        console.log('foo', data)
        socket.emit('foores', data)
      })
      socket.on('error', (err) => {
        console.error(err)
      })
      socket.on('close', () => {
        console.log('close')
      })
    })
  }))

  after(() => co(function * () {
    yield asleep(100)
    io.close()
    yield asleep(100)
  }))

  it('Sugo client', () => co(function * () {
    let client = new SugoClient()
    assert.ok(client)
  }))
})

/* global describe, before, after, it */
