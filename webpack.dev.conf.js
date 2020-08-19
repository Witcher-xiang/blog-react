const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader'] //从右往左，先css-loader做一个编译，style-loader再插入
            },
            {
                test: /\.less$/,
                // 增加 'less-loader' ，注意顺序 从右向左
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot:true, //要真正启用热模块必须得按照我之前的博客
        progress: false,  // 显示打包的进度条
        compress: true,  // 启动 gzip 压缩
        historyApiFallback: true
    },
    plugins:[new HtmlWebpackPlugin({
        //打包启用的模板
        template: './src/index.html',
        minify: {
            removeComments: false,    //移除HTML中的注释
            collapseWhitespace: false,    //删除空白符与换行符
        }
    })]
});
