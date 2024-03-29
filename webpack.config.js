const path = require('path')
const configFactory = require('react-scripts/config/webpack.config')
const CompressionPlugin = require('compression-webpack-plugin')

const config =
    'development' === process.env.NODE_ENV
        ? configFactory('development')
        : configFactory('production')

config.entry = [path.resolve(__dirname, 'src', 'frontend', 'index.tsx')]

config.output.path = path.resolve(
    __dirname,
    '.build',
    process.env.NODE_ENV,
    'frontend',
)

if ('stage' === process.env.NODE_ENV) {
    process.env.NODE_ENV = 'production'
}

if ('production' === process.env.NODE_ENV) {
    config.optimization['splitChunks'] = {
        chunks: 'all',
    }
    config.plugins.push(new CompressionPlugin())
}

module.exports = config
