#! /usr/bin/env node

'use strict'

const Gather = require('gather-scatter').Gather
const Read = require('readdirfiles')
const Scatter = require('gather-scatter').Scatter

const any = require('./lib/any')
const copy = require('./lib/copy')
const date = require('./lib/date')
const filter = require('./lib/filter')
const home = require('./lib/home')
const md = require('./lib/md')
const template = require('./lib/template')
const write = require('./lib/write')

new Read.Stream(process.cwd(), 'utf8')
  .pipe(filter)
  .pipe(new Gather())
  .pipe(any)
  .pipe(new Scatter())
  .pipe(date)
  .pipe(md)
  .pipe(template)
  .pipe(new Gather())
  .pipe(copy)
  .pipe(home)
  .pipe(new Scatter())
  .pipe(write)
