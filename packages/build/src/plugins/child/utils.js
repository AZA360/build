const { failBuild, failPlugin, cancelBuild } = require('../error')

const { addLazyProp } = require('./lazy')
const { show } = require('./status')

// Some utilities need to perform some async initialization logic first.
// We do it once for all plugins in the parent process then pass it to the child
// processes.
const startUtils = async function(buildDir) {
  const gitUtils = require('@netlify/git-utils')
  const git = await gitUtils({ cwd: buildDir })
  return { git }
}

// Retrieve the `utils` argument.
const getUtils = function({ utilsData: { git }, constants: { FUNCTIONS_SRC, CACHE_DIR }, runState }) {
  const build = { failBuild, failPlugin, cancelBuild }
  const utils = { build }
  addLazyProp(utils, 'git', getGitUtils.bind(null, git))
  addLazyProp(utils, 'cache', getCacheUtils.bind(null, CACHE_DIR))
  addLazyProp(utils, 'run', getRunUtils)
  addLazyProp(utils, 'functions', getFunctionsUtils.bind(null, FUNCTIONS_SRC))
  addLazyProp(utils, 'status', getStatusUtils.bind(null, runState))
  return utils
}

const getGitUtils = function(git) {
  return require('@netlify/git-utils').load(git)
}

const getCacheUtils = function(CACHE_DIR) {
  const cacheUtils = require('@netlify/cache-utils')
  return cacheUtils.bindOpts({ cacheDir: CACHE_DIR })
}

const getRunUtils = function() {
  return require('@netlify/run-utils')
}

const getFunctionsUtils = function(FUNCTIONS_SRC) {
  const functionsUtils = require('@netlify/functions-utils')
  const add = src => functionsUtils.add(src, FUNCTIONS_SRC, { fail: failBuild })
  return { add }
}

const getStatusUtils = function(runState) {
  return { show: show.bind(undefined, runState) }
}

module.exports = { startUtils, getUtils }
