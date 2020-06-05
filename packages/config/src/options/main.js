const {
  cwd: getCwd,
  env: { CONTEXT },
} = require('process')

const { throwError } = require('../error')
const { dirExists } = require('../utils/dir-exists')
const { removeFalsy } = require('../utils/remove_falsy')

const { getBranch } = require('./branch')
const { getRepositoryRoot } = require('./repository_root')

// Assign default options
const addDefaultOpts = function(opts = {}) {
  const optsA = removeFalsy(opts)
  const defaultOpts = DEFAULT_OPTS()
  const optsB = { ...defaultOpts, ...optsA }
  const optsC = removeFalsy(optsB)
  return optsC
}

const DEFAULT_OPTS = () => ({
  cwd: getCwd(),
  context: CONTEXT || 'production',
  mode: 'require',
})

// Normalize options
const normalizeOpts = async function(opts) {
  const repositoryRoot = await getRepositoryRoot(opts)
  const optsA = { ...opts, repositoryRoot }

  const branch = await getBranch(optsA)
  const optsB = { ...optsA, branch }

  const optsC = removeFalsy(optsB)
  await checkDirs(optsC)
  return optsC
}

// Verify that options point to existing directories
const checkDirs = async function(opts) {
  await Promise.all(DIR_OPTIONS.map(optName => checkDir(opts, optName)))
}

const DIR_OPTIONS = ['cwd', 'repositoryRoot']

const checkDir = async function(opts, optName) {
  const path = opts[optName]
  if (!(await dirExists(path))) {
    throwError(`Option '${optName}' points to a non-existing directory: ${path}`)
  }
}

module.exports = { addDefaultOpts, normalizeOpts }
