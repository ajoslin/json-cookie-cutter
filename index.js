'use strict'

var Cookie = require('cookie-cutter')

var JsonCookie = module.exports = function (doc) {
  var cookie = Cookie(doc)

  return {
    get: function jsonCookieGet (key) {
      var value = cookie.get(key)
      try {
        value = JSON.parse(value)
      } catch (_) {}
      return value
    },
    set: function jsonCookieSet (key, value, opts) {
      try {
        value = JSON.stringify(value)
      } catch (_) {}

      console.log('setting', key, value, opts)
      return cookie.set(key, value, opts)
    }
  }
}

if (typeof document !== 'undefined') {
  var jsonCookie = JsonCookie(document)
  exports.get = jsonCookie.get
  exports.set = jsonCookie.set
}
