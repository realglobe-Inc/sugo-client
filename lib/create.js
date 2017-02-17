/**
 * Create an client instance. Just an alias of `new SugoClient(config)`
 * @function sugoClient
 * @param {Object} config - Sugo caller configuration
 * @returns {SugoClient}
 */
'use strict'

const SugoClient = require('./sugo_client')

/** @lends sugoClient */
function create (...args) {
  return new SugoClient(...args)
}

module.exports = create
