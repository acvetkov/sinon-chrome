/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

var packageJson = require('./package.json');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'sinon-chrome.' + packageJson.version + '.js',
        library: 'chrome',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
