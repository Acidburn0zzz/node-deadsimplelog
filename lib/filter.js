'use strict'

const path = require('path')
const through = require('through2')

module.exports = through.obj((post, enc, done) => {
  done(null, path.extname(post.path) === '.md' ? post : null)
})
