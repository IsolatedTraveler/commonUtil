

"use strict";
const { buildCs } = require('./task/index')
const buildModule = require('./task/gModule')
const buildLay = require('./task/layModules')
const buildSrc = require('./task/src')
let version
module.exports = function (g) {
  version = g.config("pkg.version")
  g.registerMultiTask('build', 'build commonUtil modules', async function () {
    const done = this.async()
    try {
      await buildCs(g, version)
      await buildModule(g, version)
      await buildLay(g, version)
      await buildSrc(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
}