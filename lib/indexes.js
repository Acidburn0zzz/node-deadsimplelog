'use strict'

const _ = require('lodash')
const through = require('through2')

module.exports = through.obj((posts, enc, done) => {
  const clones = posts.map((p) => _.clone(p)).sort((a, b) => b.date - a.date)
  posts.push({ posts: clones })
  done(null, posts)
})
