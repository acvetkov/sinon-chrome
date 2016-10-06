/**
 * @author https://github.com/acvetkov
 * @overview Webpack config
 */

const path = require('path');
const webpack = require('webpack');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: 'production'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
            dead_code: true,
            warnings: false,
            drop_console: false
        }
    })
];

module.exports = {
    entry: {
        'sinon-chrome': path.resolve(__dirname, './src/extensions/index.js'),
        'sinon-chrome-apps': path.resolve(__dirname, './src/apps/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].min.js',
        library: 'chrome',
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            sinon: path.resolve(__dirname, 'node_modules/sinon/pkg/sinon.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015'],
                    plugins: ['add-module-exports']
                }
            },
            {
                test: /\.json$/,
                loader: 'json',
            }
        ],
        noParse: [
            /node_modules\/sinon/
        ]
    },
    plugins: plugins
};
