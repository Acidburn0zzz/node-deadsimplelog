'use strict'

const _ = require('lodash')
const cfg = require('./cfg')
const through = require('through2')

module.exports = through.obj((posts, enc, done) => {
  const clones = posts.map((p) => _.clone(p)).sort((a, b) => b.date - a.date)
  const indexes = _.chunk(clones, cfg.postsPerIndex).map((chunk) => ({ posts: chunk }))

  _.last(indexes).last = true

  indexes.forEach((index) => posts.push(index))
  done(null, posts)
})
