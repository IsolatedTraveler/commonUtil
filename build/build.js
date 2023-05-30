/**
 * Special build task to handle various jQuery build requirements.
 * Compiles JS modules into one bundle, sets the custom AMD name,
 * and includes/excludes specified modules
 */

"use strict";
const buildSrc = require('./task/src'), buildModule = require('./task/module'), buildOld = require('./task/old')
, buildLay = require('./task/layModules')
let version
module.exports = function(g) {
  version = g.config( "pkg.version" )
  g.registerMultiTask('build:mod', 'build modules', async function() {
    const done = this.async()
    try {
      await buildModule(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
  g.registerMultiTask('build:src', 'build src modules', async function() {
    const done = this.async()
    try {
      await buildSrc(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
  g.registerMultiTask('build:old', 'build old modules', async function() {
    const done = this.async()
    try {
      await buildOld(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
  g.registerMultiTask('build', 'build commonUtil modules', async function() {
    const done = this.async()
    try {
      await buildSrc(g, version)
      await buildModule(g, version)
      await buildLay(g, version)
      done()
    } catch (e) {
      done(e)
    }
  })
}