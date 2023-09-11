/**
 * Special build task to handle various jQuery build requirements.
 * Compiles JS modules into one bundle, sets the custom AMD name,
 * and includes/excludes specified modules
 */

"use strict";
const buildSrc = require('./task/src')
  , buildModule = require('./task/module')
  , buildAddComm = require('./task/addComm')
  , buildLay = require('./task/layModules')
// ,buildVue = require('./task/vue')
let version
module.exports = function (g) {
  version = g.config("pkg.version")
  g.registerMultiTask('build', 'build commonUtil modules', async function () {
    const done = this.async()
    try {
      await buildSrc(g, version)
      await buildAddComm(g, version)
      await buildModule(g, version)
      await buildLay(g, version)
      // await buildVue(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
}