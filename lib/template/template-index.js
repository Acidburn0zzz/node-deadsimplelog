'use strict'

const cfg = require('../cfg')
const post = require('./template-post')

module.exports = (p, i) => {
  title(p)
  url(p, i)
  newer(p, i)
  older(p, i)
  content(p)
}

function title (p) {
  p.title = cfg.blogName
}

function url (p, i) {
  p.url = i === 1 ? 'index.html' : `index-${i}.html`
}

function newer (p, i) {
  p.newer = (() => {
    switch (i) {
      case 1: return null
      case 2: return 'index.html'
      default: return `index-${i - 1}.html`
    }
  })()
}

function older (p, i) {
  p.older = p.last ? null : `index-${i + 1}.html`
}

function content (p) {
  p.posts.forEach((p) => post(p))
  p.content = p.posts.map((p) => p.content).join('\n')
}
