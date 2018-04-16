'use strict'

const mjml = require('mjml')
const extend = require('extend-shallow')

exports.name = 'mjml'
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const opts = extend({}, options, locals)
  const result = mjml(str, opts)
  return result.html
}
