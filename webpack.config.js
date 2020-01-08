const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const developmentConfig = require('./webpack/dev');
const optimizeImages = require('./webpack/optimizeImages');
const optimizeCss = require('./webpack/optimizeCss');

const common = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "Test project",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options:  {
                            "name": "[name].[ext]",
                            outputPath: "./images",
                            useRelativePath: true
                        }
                    },
                ]
            }
        ]
    }
};

module.exports = (env) => (env === 'production') ?
     merge([
        common,
        optimizeImages(),
        optimizeCss(),
    ]) :
    merge([
        common,
        developmentConfig()
    ]);
