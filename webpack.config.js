'use strict';

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'sinon-chrome.latest.js',
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
                loader: 'babel-loader'
            }
        ],
        noParse: [
            /node_modules\/sinon/
        ]
    }
};
