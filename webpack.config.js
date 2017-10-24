const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' },
            { from: '404.html' },
            { from: 'dependencies/boilerplate.js' },
            { from: 'dependencies/tsJsxSupport.js' },
            { from: 'dependencies/clipper.js' },
            { from: 'dependencies/clipper.min.js' },
            { from: 'dependencies/rng.js' },
            { from: 'assets', to: 'assets' }
        ])
    ],
    devServer: {
	host: "miyu.dev",
	port: 80
    }
};
