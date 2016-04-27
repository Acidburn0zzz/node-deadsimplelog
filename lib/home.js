'use strict'

const cfg = require('./cfg')
const mustache = require('mustache')
const shift = require('shift-lines')
const through = require('through2')

module.exports = through.obj((pages, enc, done) => {
  const posts = pages.map((p) => `<li><time datetime="${p.time}">${p.friendlyTime}</time><a href="${p.url}">${p.title}</a></li>`).join('\n')
  const home = {
    content: mustache.render(
      cfg.pageTemplate,
      {
        content: shift(2, `<ul>${posts}</ul>`),
        css: cfg.css,
        name: cfg.blogName,
        title: cfg.blogName
      }
    ),
    url: 'index.html'
  }
  pages.push(home)
  done(null, pages)
})
