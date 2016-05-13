#! /usr/bin/env node

'use strict'

const Gather = require('gather-scatter').Gather
const List = require('./lib/list')
const Scatter = require('gather-scatter').Scatter

const any = require('./lib/any')
const content = require('./lib/content')
const copy = require('./lib/copy')
const css = require('./lib/css')
const date = require('./lib/date')
const dir = require('./lib/dir')
const filter = require('./lib/filter')
const home = require('./lib/home')
const path = require('./lib/path')
const write = require('./lib/write')

new List()
  .pipe(filter)
  .pipe(new Gather())
  .pipe(any)
  .pipe(new Scatter())
  .pipe(path)
  .pipe(date)
  .pipe(content)
  .pipe(new Gather())
  .pipe(home)
  .pipe(dir)
  .pipe(copy)
  .pipe(css)
  .pipe(new Scatter())
  .pipe(write)
