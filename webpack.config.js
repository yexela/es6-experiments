'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
require('babel-polyfill');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        counter: './redux/counter/counter',
        todos: ['babel-polyfill', './redux/todos/index']
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        // library: '[name]'
    },

    watch: false,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015'
        }]
    }
};

