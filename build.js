var path = require('path');
var webpack = require('webpack');

const config = {
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { presets: ['env'] },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /node_modules/
            },
        ]
    }
};
webpack(config, function (err, stats) {
    if (err) {
        throw err;
    }
    console.log('done');
});
