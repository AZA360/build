const { platform } = require('process')

const test = require('ava')

const { runFixture } = require('../../helpers/main')

if (platform !== 'win32') {
  test('build.command uses Bash', async t => {
    await runFixture(t, 'bash')
  })
}

test('build.command can execute global binaries', async t => {
  await runFixture(t, 'global_bin')
})

test('build.command can execute local binaries', async t => {
  await runFixture(t, 'local_bin')
})

if (platform === 'linux') {
  test('build.command can execute shell commands', async t => {
    await runFixture(t, 'shell')
  })
}

test('build.command use correct PWD', async t => {
  await runFixture(t, 'pwd')
})

test('build.command from UI settings', async t => {
  await runFixture(t, 'none', { flags: '--defaultConfig={"build":{"command":"node\\ --version"}}' })
})
