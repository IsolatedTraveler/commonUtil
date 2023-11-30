/**
 * Special build task to handle various jQuery build requirements.
 * Compiles JS modules into one bundle, sets the custom AMD name,
 * and includes/excludes specified modules
 */

"use strict";
const buildSrc = require('./task/src')
  , buildLay = require('./task/layModules')
  , buildGModules = require('./task/gModule')
let version
module.exports = function (g) {
  version = g.config("pkg.version")
  g.registerMultiTask('build', 'build commonUtil modules', async function () {
    const done = this.async()
    try {
      await buildSrc(g, version)
      await buildLay(g, version)
      await buildGModules(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
}