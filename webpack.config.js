let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/client/public');
let APP_DIR = path.resolve(__dirname, './src/');

let config = {
    entry: APP_DIR + '/index.js',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ],
            }
        ]
    }
};
module.exports  = config;