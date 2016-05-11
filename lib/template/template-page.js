'use strict'

const cfg = require('../cfg')
const mustache = require('mustache')

module.exports = (p) => {
  p.content = mustache.render(
    cfg.pageTemplate,
    {
      content: p.content,
      css: cfg.css,
      name: cfg.blogName,
      title: p.title
    }
  )

  return p
}
