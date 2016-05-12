'use strict'

const friendly = require('friendly-url')
const path = require('path')
const through = require('through2')

module.exports = through.obj((filepath, enc, done) => {
  const filename = path.basename(filepath, path.extname(filepath))
  done(null, {
    path: {
      raw: filepath,
      url: friendly(filename) + '.html',
      title: filename
    }
  })
})
