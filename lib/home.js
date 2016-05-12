'use strict'

const cfg = require('./cfg')
const mustache = require('mustache')
const through = require('through2')

module.exports = through.obj((pages, enc, done) => {
  const posts = pages.sort((a, b) => b.date.raw - a.date.raw).map((p) =>
      mustache.render(
        cfg.template.item,
        {
          friendlyTime: p.date.friendly,
          time: p.time,
          title: p.path.title,
          url: p.path.url
        }
      )
    ).join('\n')

  const home = {
    content: mustache.render(
      cfg.template.page,
      {
        content: `<ul>${posts}</ul>`,
        css: cfg.css,
        name: cfg.blogName,
        title: cfg.blogName
      }
    ),
    path: {
      url: 'index.html'
    }
  }

  pages.push(home)

  done(null, pages)
})
