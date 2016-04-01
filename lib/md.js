'use strict'

const md = require('commonmark')
const shift = require('shift-lines')
const through = require('through2')

const parser = new md.Parser()
const renderer = new md.HtmlRenderer()

module.exports = through.obj((post, enc, done) => {
  post.content = shift(2, renderer.render(parser.parse(post.content)).trim())
  done(null, post)
})
