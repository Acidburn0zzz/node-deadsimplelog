'use strict'

const through = require('through2')

let currentIndex = 1
const template = {
  index: require('./template-index'),
  page: require('./template-page'),
  post: require('./template-post')
}

module.exports = through.obj((p, enc, done) => {
  if ('posts' in p) template.index(p, currentIndex++)
  else template.post(p)

  done(null, template.page(p))
})
