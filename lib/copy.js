'use strict'

const cfg = require('./cfg')
const fs = require('fs')
const path = require('path')
const spy = require('through2-spy')

module.exports = spy.obj(() => copyDir(cfg.folder.input, cfg.folder.output))

function copyDir (src, dest) {
  fs.readdirSync(src)
    .filter((f) => f[0] !== '.' && path.extname(f) !== '.md' && f !== 'html' && f !== 'node_modules')
    .forEach((f) => {
      const innerSrc = path.join(src, f)
      const innerDest = path.join(dest, f)
      const stats = fs.lstatSync(path.join(src, f))

      if (stats.isDirectory()) {
        fs.mkdirSync(innerDest)
        copyDir(innerSrc, innerDest)
      } else if (stats.isSymbolicLink()) {
        fs.symlinkSync(fs.readlinkSync(innerSrc), innerDest)
      } else {
        fs.createReadStream(innerSrc).pipe(fs.createWriteStream(innerDest))
        console.log(`copied ${innerDest}`)
      }
    })
}
