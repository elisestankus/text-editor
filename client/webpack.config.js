const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // service worker plugin 
      new InjectManifest({
        // service worker source file - where the manifest is injected
        swSrc: './src-sw.js',
        // name of service worker file to be created by the plugin
        swDest: 'src-sw.js',
      }),

      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
