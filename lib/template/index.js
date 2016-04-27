'use strict'

const index = require('./template-index')
const page = require('./template-page')
const post = require('./template-post')
const through = require('through2')

module.exports = through.obj((p, enc, done) => {
  ('posts' in p ? index : post)(p)
  done(null, page(p))
})
