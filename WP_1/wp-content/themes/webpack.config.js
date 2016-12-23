const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/style.css');


module.exports = {
    entry: {
        fourteen : './index.js',
        style: './style.js'
        },
    output: {
        path: path.join(__dirname, 'twentyfourteen/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader : 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|eot)$/i,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'

            }

            // { test: /\.css$/, loaders : ['style', 'css?modules'] },
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]

}

