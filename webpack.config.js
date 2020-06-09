const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/pages/main-page/main.pug',
            filename: 'main.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/log-in-page/log-in-page.pug',
            filename: 'log-in-page.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/registration-page/registration-page.pug',
            filename: 'registration.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/room-details-page/room-details-page.pug',
            filename: 'room-details-page.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/search-room-page/search-room-page.pug',
            filename: 'search-room-page.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/ui-kit/ui-kit.pug',
            filename: 'ui-kit.html'
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
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
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