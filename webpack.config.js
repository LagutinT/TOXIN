const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/scripts/index.js',
        'landing-page': './src/scripts/landing-page.js',
        'log-in-page': './src/scripts/log-in-page.js',
        'registration-page': './src/scripts/registration-page.js',
        'room-details-page': './src/scripts/room-details-page.js',
        'search-room-page': './src/scripts/search-room-page.js',
        'ui-kit': './src/scripts/ui-kit.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/pages/landing-page/landing-page.pug',
            filename: 'landing-page.html',
            chunks: ['landing-page']
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/log-in-page/log-in-page.pug',
            filename: 'log-in-page.html',
            chunks: ['log-in-page']
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/registration-page/registration-page.pug',
            filename: 'registration.html',
            chunks: ['registration-page']
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/room-details-page/room-details-page.pug',
            filename: 'room-details-page.html',
            chunks: ['room-details-page']
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/search-room-page/search-room-page.pug',
            filename: 'search-room-page.html',
            chunks: ['sarch-room-page']
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/ui-kit/ui-kit.pug',
            filename: 'ui-kit.html',
            chunks: ['ui-kit']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts',
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true}
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
}