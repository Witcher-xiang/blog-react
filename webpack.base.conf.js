const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //主要cleanWebpack的更新

module.exports = {
    //项目入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist') // 拼接出一个路径字符串
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // test是指命名的匹配规则
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    plugins: [
        //网站入口html
        new HtmlWebpackPlugin({
            //打包启用的模板
            template: './src/index.html',
            minify: {
                removeComments: false,    //移除HTML中的注释
                collapseWhitespace: false,    //删除空白符与换行符
            }
        }),
      //  new CleanWebpackPlugin() //注意这里新版不用传入dist
    ]
};

/*
* babel配置：
*   @babel/core 是babel 的核心库, 把代码生成AST(语法树)
    @babel/preset-env 用来把es6语法编译成老版本浏览器可能兼容的语法
    @babel/preset-react 把react使用的jsx语法编译成 js
    babel-loader 是让 babel 在 webpack 下运行的专用于webpack的loader

    react环境参考博客：
    * （1）https://juejin.im/post/5afc29fa6fb9a07ab379a2ae
    * （2）https://www.jianshu.com/p/ff568b51e121
    * （3）https://www.jianshu.com/p/ea9e0e44a238
* */
