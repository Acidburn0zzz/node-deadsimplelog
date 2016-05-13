'use strict'

const cfg = require('./cfg')
const fs = require('fs')
const path = require('path')
const through = require('through2')

module.exports = through.obj((pages, enc, done) => {
  copyDir(cfg.folder.input, cfg.folder.output)
  done(null, pages)
})

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
