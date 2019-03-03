const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = (env) => {
    const isProducation = env === 'production'
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })

    process.env.NODE_ENV = process.env.NODE_ENV || 'development'

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProducation ? 'source-map' : 'inline-source-map',
        devServer: { // Run server files
            proxy: {
                '/api': 'http://localhost:5000'
            },
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/',
        }
    }
}