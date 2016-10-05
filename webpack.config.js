path = require('path');
webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    entry: './src/index.js',
    output: {
        path: path.resolve('dist/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}, {
    entry: {
        style: './src/jquery.bracket.scss'
    },
    output: {
        path: path.resolve('dist/'),
        filename: 'style.css'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}];