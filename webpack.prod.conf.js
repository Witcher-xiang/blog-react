const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

console.log(__dirname,"__dirnameSs是");
//__dirname 它指向当前执行脚本所在目录
module.exports = merge(baseConfig, {
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然延用 file-loader 的形式，产出 url 格式
                        limit: 5 * 1024,
                        name: 'images/[name]_[hash:7].[ext]',
                        // 打包到 img 目录下
                        //但我写到这个目录下，图片就没法加载出来？？why
                       // outputPath: '/img1/',

                        // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
                    'css-loader',
                    'postcss-loader'             // 目的为了保证css的兼容性，给css3属性加上前缀
                ]
            },
            {
                test: /\.less$/,
                // 增加 'less-loader' ，注意顺序
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash:8].css'
        }),
    ],

    optimization: {
        // 压缩 css，这两个插件都需要安装
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
});
