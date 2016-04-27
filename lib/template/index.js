'use strict'

const page = require('./template-page')
const post = require('./template-post')
const through = require('through2')

module.exports = through.obj((p, enc, done) => {
  post(p)
  done(null, page(p))
})
