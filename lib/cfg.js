'use strict'

const path = require('path')
const rfile = require('rfile')

module.exports = {
  get blogName () {
    return path.basename(process.cwd())
  },

  get css () {
    return rfile(path.join(__dirname, '../asset/style/style.css'))
  },

  get encoding () {
    return 'utf8'
  },

  date: {
    get format () {
      return 'YYYY-MM-DD'
    },

    get friendlyFormat () {
      return 'MMMM YYYY'
    }
  },

  folder: {
    get input () {
      return process.cwd()
    },

    get output () {
      return './html'
    }
  },

  template: {
    get article () {
      return rfile(path.join(__dirname, '../asset/templates/article.html'))
    },

    get item () {
      return rfile(path.join(__dirname, '../asset/templates/item.html'))
    },

    get page () {
      return rfile(path.join(__dirname, '../asset/templates/page.html'))
    }
  }
}
