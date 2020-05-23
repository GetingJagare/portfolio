const glob = require('glob-all');
const path = require('path');
const miniCssWebpackPlugin = require('mini-css-extract-plugin');
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');

function cssWhiteList() {
    return [];
}

module.exports = {
    entry: {
        main: './src/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: miniCssWebpackPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'style-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../img',
                            emitFile: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssWebpackPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new PurgecssPlugin({
            paths: glob.sync(['./app/views/**/*.twig']),
            whitelistPatterns: cssWhiteList(),
        }),
    ],
    optimization: {
        minimizer: [
            new uglifyJsWebpackPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
            new optimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
            })
        ]
    }
};