var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');



var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
         
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ['es2015', 'react']
                }
             }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: true
            
        }),
        new CleanWebpackPlugin(['dist']), 

        new SWPrecacheWebpackPlugin(
            {
              cacheId: 'my-domain-cache-id',
              dontCacheBustUrlsMatching: /\.\w{8}\./,
              filename: 'service-worker.js',
              minify: true,
              navigateFallback: 'index.html',
              staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
            }
          ),
          //works only in https and android and ios browsers
          new WebpackPwaManifest({
            name: 'adysen lab',
            short_name: 'Adysen lab lab',
            description: 'the general platform for all furthur developments',
            background_color: '#01579b',
            theme_color: '#01579b',
            'theme-color': '#01579b',
            start_url: '/',
            icons: [
              {
                src: path.resolve('src/img/my_logo.png'),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join('assets', 'icons')
              }
            ]
          })
    ]
};