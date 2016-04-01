'use strict'

const fs = require('fs')
const through = require('through2')

module.exports = through.obj((post, enc, done) => {
  fs.stat(post.path, (err, stats) => {
    if (err) return done(err)

    post.date = stats.birthtime
    done(null, post)
  })
})
