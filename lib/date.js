'use strict'

const cfg = require('./cfg')
const fs = require('fs')
const moment = require('moment')
const through = require('through2')

module.exports = through.obj((post, enc, done) => {
  fs.stat(post.path.raw, (err, stats) => {
    if (err) return done(err)

    post.date = {
      raw: stats.birthtime,
      yyyymmdd: moment(stats.birthtime).format(cfg.date.format),
      friendly: moment(stats.birthtime).format(cfg.date.friendlyFormat)
    }

    done(null, post)
  })
})
