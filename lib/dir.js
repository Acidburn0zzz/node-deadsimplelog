'use strict'

const fs = require('fs')
const rimraf = require('rimraf')
const through = require('through2')

module.exports = through.obj((pages, enc, done) => {
  rimraf.sync('html')
  console.log('removed html/')

  fs.mkdirSync('html')
  console.log('created html/')

  done(null, pages)
})
