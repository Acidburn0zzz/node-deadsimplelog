'use strict'

const cfg = require('./cfg')
const fs = require('fs')
const path = require('path')
const stream = require('stream')
const util = require('util')

module.exports = function () {
  const filepaths = fs.readdirSync(cfg.folder.input).map((filename) => path.join(cfg.folder.input, filename))

  stream.Readable.call(this, { objectMode: true })

  this._read = () => this.push(filepaths.shift() || null)
}

util.inherits(module.exports, stream.Readable)
