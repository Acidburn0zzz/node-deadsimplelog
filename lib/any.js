'use strict'

const through = require('through2')

module.exports = through.obj((posts, enc, done) => {
  if (posts && posts.length) done(null, posts)
  else console.log('nothing to do')
})
