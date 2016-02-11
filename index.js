'use strict'

var mjml = require('mjml')

exports.name = 'mjml'
exports.outputFormat = 'html'

exports.render = mjml.mjml2html
