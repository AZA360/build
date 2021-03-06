const test = require('ava')

const { runFixture } = require('../../helpers/main')

test('Print stack trace of plugin errors', async t => {
  await runFixture(t, 'plugin')
})

test('Print stack trace of plugin errors during load', async t => {
  await runFixture(t, 'plugin_load')
})

test('Print stack trace of build.command errors', async t => {
  await runFixture(t, 'command')
})

test('Print stack trace of build.command errors with stack traces', async t => {
  await runFixture(t, 'command_stack')
})

test('Print stack trace of Build command UI settings', async t => {
  await runFixture(t, 'none', { flags: '--defaultConfig={"build":{"command":"node\\ --invalid"}}' })
})

test('Print stack trace of validation errors', async t => {
  await runFixture(t, '', { flags: '--config=/invalid' })
})
