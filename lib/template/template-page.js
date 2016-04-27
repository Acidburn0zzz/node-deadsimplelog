'use strict'

const cfg = require('../cfg')
const mustache = require('mustache')
const shift = require('shift-lines')

module.exports = (p) => {
  p.content = mustache.render(
    cfg.pageTemplate,
    {
      content: shift(2, p.content),
      css: cfg.css,
      name: cfg.blogName,
      title: p.title
    }
  )

  return p
}
