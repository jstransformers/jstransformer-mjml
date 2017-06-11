'use strict'

const mjml = require('mjml')

exports.name = 'mjml'
exports.outputFormat = 'html'

exports.render = function (str) {
  const result = mjml.mjml2html(str)
  return result.html
}
