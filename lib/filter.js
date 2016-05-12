'use strict'

const fs = require('fs')
const path = require('path')
const through = require('through2')

module.exports = through.obj((filepath, enc, done) => {
  if (path.extname(filepath) === '.md') {
    fs.stat(filepath, (err, stats) => {
      if (err) done(err)
      else done(null, stats.isFile() ? filepath : null)
    })
  } else done(null, null)
})
