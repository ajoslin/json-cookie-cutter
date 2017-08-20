'use strict'

var test = require('tape')
var jsonCookieCutter = require('./')

test(function (t) {
  const doc = {cookie: escape('myObj') + '=' + escape(1)}
  var cookie = jsonCookieCutter(doc)

  t.equal(cookie.get('myObj'), 1, 'works on non-stringified')
  cookie.set('myObj', {foo: 'bar'})
  t.deepEqual(cookie.get('myObj'), {foo: 'bar'})

  console.log(doc)
  t.end()
})
