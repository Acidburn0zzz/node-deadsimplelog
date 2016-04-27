'use strict'

const cfg = require('../cfg')
const post = require('./template-post')

module.exports = (p, i) => {
  p.title = cfg.blogName
  p.url = 'index.html'
  p.posts.forEach((p) => post(p))
  p.content = p.posts.map((p) => p.content).join('\n')
}
