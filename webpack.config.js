const webpack = require('webpack');
module.exports=
{
    entry: './card/static/card/scripts/present_card.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["react"]
                }
            },
            {
                test: '\.css$',
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
