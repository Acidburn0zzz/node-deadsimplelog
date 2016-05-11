'use strict'

const cfg = require('./cfg')
const mustache = require('mustache')
const through = require('through2')

module.exports = through.obj((pages, enc, done) => {
  const posts = pages.sort((a, b) => b.date - a.date)
    .map((p) => `<li><time datetime="${p.time}">${p.friendlyTime}</time><a href="${p.url}">${p.title}</a></li>`)
    .join('\n')
  const home = {
    content: mustache.render(
      cfg.pageTemplate,
      {
        content: `<ul>${posts}</ul>`,
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
