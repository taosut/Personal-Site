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
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: __dirname + "./src/css",
                exclude: __dirname + "./src/js",
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
};
module.exports  = config;