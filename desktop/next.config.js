const preact = require('preact')

// plugins
const withPlugins = require('next-compose-plugins')
const withPrefresh = require('@prefresh/next')
const withPWA = require('next-pwa')

const config = {
  experimental: {
    modern: true,
    polyfillsOptimization: true
  },

  sassOptions: {
    importer: require('node-sass-magic-importer')()
  },

  webpack(config, { dev, isServer }) {
    config.resolve.symlinks = false

    const splitChunks = config.optimization && config.optimization.splitChunks
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
          test: preactModules
        })
        cacheGroups.commons.name = 'framework'
      } else {
        cacheGroups.preact = {
          name: 'commons',
          chunks: 'all',
          test: preactModules
        }
      }
    }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    aliases.react = aliases['react-dom'] = 'preact/compat'

    if (dev) {
      if (isServer) {
        // Remove circular `__self` and `__source` props only meant for
        // development. See https://github.com/developit/nextjs-preact-demo/issues/25
        const oldVNodeHook = preact.options.vnode
        preact.options.vnode = (vnode) => {
          const props = vnode.props
          if (props != null) {
            if ('__self' in props) props.__self = null
            if ('__source' in props) props.__source = null
          }

          if (oldVNodeHook) {
            oldVNodeHook(vnode)
          }
        }
      } else {
        // inject Preact DevTools
        const entry = config.entry
        config.entry = () => entry().then(entries => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
          return entries
        })
      }
    }

    return config
  }
}

module.exports = withPlugins([
  [withPrefresh],
  [withPWA, {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'start-url',
            expiration: {
              maxEntries: 1,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts',
            expiration: {
              maxEntries: 4,
              maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
            }
          }
        },
        {
          urlPattern: /.*qrshare-server\.accudio\.com.*$/i,
          handler: 'NetworkOnly'
        },
        {
          urlPattern: /.*source\.unsplash\.com.*$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'unsplash-images'
          }
        },
        {
          urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-font-assets',
            expiration: {
              maxEntries: 4,
              maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
            }
          }
        },
        {
          urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-image-assets',
            expiration: {
              maxEntries: 64,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /\.(?:js)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-js-assets',
            expiration: {
              maxEntries: 32,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /\.(?:css)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-style-assets',
            expiration: {
              maxEntries: 32,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'others',
            expiration: {
              maxEntries: 32,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            },
            networkTimeoutSeconds: 10
          }
        }
      ]
    }
  }]
], config)
