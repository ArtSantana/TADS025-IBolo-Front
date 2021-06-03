const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.test.(js|ts)x?$/,
      loader: 'ignore-loader',
    })

    return config
  },
}
