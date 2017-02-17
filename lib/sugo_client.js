/**
 * Abstract client of sugos
 * @abstract
 * @class SugoClient
 */
'use strict'

const { EventEmitter } = require('events')

/** @lends SugoClient */
class SugoClient extends EventEmitter {
  /**
   * Type of client
   * @abstract
   * @type {?string}
   */
  get clientType () {
    return null
  }
}

module.exports = SugoClient
