'use strict'

var mjml = require('mjml')

exports.name = 'mjml'
exports.outputFormat = 'html'

exports.render = function (str, opts) {
  var result = mjml.mjml2html(str)
  return result.html
}
