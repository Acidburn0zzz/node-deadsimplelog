'use strict'

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const spy = require('through2-spy')

module.exports = spy.obj(
  () => {
    removeDir('html')
    copyDir('.', 'html')
  }
)

function copyDir (src, dest) {
  makeDir(dest)
  fs.readdirSync(src)
    .filter((f) => f[0] !== '.' && path.extname(f) !== '.md' && f !== 'html' && f !== 'node_modules')
    .forEach((f) => {
      const innerSrc = path.join(src, f)
      const innerDest = path.join(dest, f)
      const stats = fs.lstatSync(path.join(src, f))

      if (stats.isDirectory()) copyDir(innerSrc, innerDest)
      else if (stats.isSymbolicLink()) fs.symlinkSync(fs.readlinkSync(innerSrc), innerDest)
      else copyFile(innerSrc, innerDest)
    })
}

function copyFile (src, dest) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dest))
  console.log(`copied  ${dest}`)
}

function removeDir (dir) {
  rimraf.sync(dir)
  console.log(`removed ${dir}/`)
}

function makeDir (dir) {
  fs.mkdirSync(dir)
  console.log(`created ${dir}/`)
}
