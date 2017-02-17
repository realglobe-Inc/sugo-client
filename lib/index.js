/**
 * Abstract client for SUGOS
 * @module sugo-client
 * @version 1.0.0
 * @license Apache-2.0
 */

'use strict'

const SugoClient = require('./sugo_client')
const create = require('./create')

let lib = create.bind(this)

Object.assign(lib, SugoClient, {
  create,
  SugoClient
})

module.exports = lib
