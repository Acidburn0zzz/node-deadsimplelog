'use strict'

const cfg = require('./cfg')
const fs = require('fs')
const md = require('commonmark')
const mustache = require('mustache')
const through = require('through2')

const parser = new md.Parser()
const renderer = new md.HtmlRenderer()

module.exports = through.obj((post, enc, done) => {
  fs.readFile(post.path.raw, cfg.encoding, (err, raw) => {
    if (err) return done(err)

    const parsedMarkdown = parser.parse(raw)
    const renderedMarkdown = renderer.render(parsedMarkdown)

    const renderedArticle = mustache.render(
      cfg.template.article,
      {
        content: renderedMarkdown,
        friendlyTime: post.date.friendly,
        title: post.path.title,
        url: post.path.url
      }
    )

    const renderedPage = mustache.render(
      cfg.template.page,
      {
        content: renderedArticle,
        css: cfg.css,
        name: cfg.blogName,
        title: post.path.title
      }
    )

    post.content = renderedPage

    done(null, post)
  })
})
