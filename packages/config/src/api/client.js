const { env } = require('process')

const NetlifyAPI = require('netlify')

const { removeFalsy } = require('../utils/remove_falsy')

// Retrieve Netlify API client, if an access token was passed
const getApiClient = function({ token = env.NETLIFY_AUTH_TOKEN }) {
  if (!token) {
    return
  }

  // TODO: find less intrusive way to mock HTTP requests
  const parameters = removeFalsy({ scheme: env.TEST_SCHEME, host: env.TEST_HOST })
  const api = new NetlifyAPI(token, parameters)
  return api
}

module.exports = { getApiClient }
