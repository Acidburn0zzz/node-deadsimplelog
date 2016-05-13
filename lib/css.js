'use strict'

const cfg = require('./cfg')
const through = require('through2')

module.exports = through.obj((pages, enc, done) => {
  const css = {
    content: cfg.css,
    path: {
      url: 'style.css'
    }
  }

  pages.push(css)

  done(null, pages)
})
