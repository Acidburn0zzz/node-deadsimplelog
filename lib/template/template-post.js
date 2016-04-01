'use strict'

const cfg = require('../cfg')
const friendly = require('friendly-url')
const moment = require('moment')
const mustache = require('mustache')
const path = require('path')

module.exports = (p) => {
  title(p)
  url(p)
  content(p)
}

function title (p) {
  p.title = path.basename(p.path, path.extname(p.path))
}

function url (p) {
  p.url = friendly(p.title) + '.html'
}

function content (p) {
  p.content = mustache.render(
    cfg.postTemplate,
    {
      content: p.content,
      friendlyTime: moment(p.time).format('MMMM YYYY'),
      time: moment(p.time).format('YYYY-MM-DD'),
      title: p.title,
      url: p.url
    }
  )
}
