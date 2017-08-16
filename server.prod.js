const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./config/webpack.config.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(express.static(`${__dirname}/public`))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}))

app.use('/*', express.static(`${__dirname}/public/index.html`))

const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port
  console.log('Production server listening at port %s', port) // eslint-disable-line
})
