'use strict'

const fs = require('fs')
const rimraf = require('rimraf')
const spy = require('through2-spy')

module.exports = spy.obj(
  () => {
    rimraf.sync('html')
    console.log('removed html/')

    fs.mkdirSync('html')
    console.log('created html/')
  }
)
