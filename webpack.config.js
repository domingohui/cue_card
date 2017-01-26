const path = require('path');
const webpack = require('webpack');

module.exports=
{
    entry: './card/static/card/scripts/present_card.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './card/static/card/scripts'),
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, './card/static/card/css'),
                loader: 'css-loader!style-loader'
            },
        ]
    },
    output: {
        filename: 'frontend_bundle.js',
            path: __dirname + '/card/static/card/build',
            publicpath: "/static/"
    },
};
