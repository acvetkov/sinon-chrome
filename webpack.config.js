const path = require('path');
const webpack = require('webpack');

const plugins = [];

plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: 'production'
    }
}));

plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
        dead_code: true,
        warnings: false,
        drop_console: true
    }
}));

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
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015'],
                    plugins: ['add-module-exports']
                }
            }
        ],
        noParse: [
            /node_modules\/sinon/
        ]
    },
    plugins: plugins
};
