'use strict'

const path = require('path')
const rfile = require('rfile')

module.exports = {
  get blogName () {
    return path.basename(process.cwd())
  },

  get css () {
    const css = rfile(path.join(__dirname, '../asset/style.css'))
    return `<style>${css}</style>`
  },

  get pagesFolder () {
    return './html'
  },

  get pageTemplate () {
    return rfile(path.join(__dirname, '../asset/templates/page.html'))
  },

  get postTemplate () {
    return rfile(path.join(__dirname, '../asset/templates/post.html'))
  },

  get postsPerIndex () {
    return 10
  }
}
