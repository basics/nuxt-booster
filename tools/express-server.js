const express = require('express')
const esm = require('esm')
const { getArg } = esm(module)(require.resolve('./utils'))
const app = express()

const dist = getDist()
const host = getHost()
const port = getPort()

app.use(express.static(dist))
app.listen(port, host, function () {
  const { address, port } = this.address()
  // eslint-disable-next-line no-console
  console.log(`server listening on http://${address}:${port} ; dist: ${dist}`)
})

function getDist () {
  return getArg('dist') || process.env.DIST || process.env.npm_config_dist || 'dist'
}

function getHost () {
  return getArg('host') || process.env.HOST || process.env.npm_config_host || 'localhost'
}

function getPort () {
  return getArg('port') || process.env.PORT || process.env.npm_config_port || 3000
}
