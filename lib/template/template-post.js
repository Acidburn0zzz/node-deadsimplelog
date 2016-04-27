'use strict'

const cfg = require('../cfg')
const friendly = require('friendly-url')
const moment = require('moment')
const mustache = require('mustache')
const path = require('path')

module.exports = (p) => {
  p.title = path.basename(p.path, path.extname(p.path))
  p.url = friendly(p.title) + '.html'
  p.time = moment(p.date).format('YYYY-MM-DD')
  p.friendlyTime = moment(p.date).format('MMMM YYYY')
  p.content = mustache.render(cfg.postTemplate, p)
}
