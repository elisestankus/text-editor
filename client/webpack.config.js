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

      // manifest.json plugin
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text editor',
        short_name: 'jate',
        description: 'A text editor',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        // application's starting url
        start_url: './',
        publicPath: './',
        // defines the logo source and the multiple sizes of the logo -- used when the application is installed
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      // generates html file and injects bundles script tag
      new HtmlWebpackPlugin({
        // path to the template html file
        template: './index.html',
        // sets the title for the generated html file
        title: 'Text editor'
      }),
    ],

    module: {
      rules: [
        // css/style loader 
        {
          // regex to match .css file type
          test: /\.css$/i,
          // loaders/packages to optimize css
          use: ['style-loader', 'css-loader'],
        },


      ],
    },
  };
};
