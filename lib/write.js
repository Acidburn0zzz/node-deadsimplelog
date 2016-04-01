'use strict'

const cfg = require('./cfg')
const fs = require('fs')
const path = require('path')
const through = require('through2')

module.exports = through.obj((page, enc, done) => {
  const filepath = path.join(cfg.pagesFolder, page.url)

  fs.writeFile(filepath, page.content, (err) => {
    if (err) return done(err)

    console.log(`written ${filepath}`)
    done()
  })
})
