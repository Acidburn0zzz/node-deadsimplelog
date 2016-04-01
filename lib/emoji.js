'use strict'

const emojis = require('emojis')
const through = require('through2')

module.exports = through.obj((post, enc, done) => {
  post.content = emojis.unicode(post.content)
  done(null, post)
})
