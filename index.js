#! /usr/bin/env node

'use strict'

const any = require('./lib/any')
const copy = require('./lib/copy')
const date = require('./lib/date')
const emoji = require('./lib/emoji')
const filter = require('./lib/filter')
const indexes = require('./lib/indexes')
const md = require('./lib/md')
const template = require('./lib/template')
const write = require('./lib/write')

const Gather = require('gather-scatter').Gather
const Read = require('readdirfiles')
const Scatter = require('gather-scatter').Scatter

new Read.Stream(process.cwd(), 'utf8')
  .pipe(filter)
  .pipe(new Gather())
  .pipe(any)
  .pipe(new Scatter())
  .pipe(date)
  .pipe(emoji)
  .pipe(md)
  .pipe(new Gather())
  .pipe(indexes)
  .pipe(new Scatter())
  .pipe(template)
  .pipe(new Gather())
  .pipe(copy)
  .pipe(new Scatter())
  .pipe(write)
