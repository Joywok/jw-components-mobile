const path = require('path');
const webpack = require('webpack');
const pxtorem = require('postcss-pxtorem');

const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  // return{
    devtool: false,
    entry: ['./index.js'],
    //入口文件输出配置
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'jw-components-mobile.js',
      chunkFilename: "nav/[name].js",
      library:"jw-components-mobile",
      libraryTarget:"umd",
    },
    resolve: {
      modules: ['node_modules', path.join(__dirname, '../node_modules')],
      extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
    module: {
      //加载器配置
      loaders: [
        {
                test: /\.jsx?$/,
                loader: 'babel-loader',
       },
        {
          exclude: [/\.html$/,/\.js$/,/\.css$/,/\.scss$/,/\.less$/,/\.json$/,/\.svg$/],loader: 'url-loader',query: {
            limit: 10000,
            name: 'static/[name].[hash:8].[ext]',
          },
        },
        {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        {test: /\.css$/,loaders: ['style-loader','css-loader?importLoaders=1','postcss-loader']},
        {test: /.scss$/, loaders: ['style-loader','css-loader?importLoaders=1','sass-loader']},
        {test: /.less$/, loaders: ['style-loader','css-loader?importLoaders=1','less-loader']},
        {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        {test: /\.json$/,loader: 'json-loader'},
        {test: /\.html$/,loader: 'file?name=/public/[name].[ext]'}, 
        {
          test: /\.svg$/,
          loader: 'file-loader',
          query: {
            name: 'static/[name].[hash:8].[ext]'
          }
        }
        //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
        // {test: /\.css$/,loaders: ['style-loader','css-loader?importLoaders=1&modules&localIdentName=[local]___[hash:base64:5]','postcss-loader']},
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ "global.GENTLY": false }),
      new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
    ],
    devServer: {
      contentBase: ".",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      hot:true,
      open:true,
      inline: true//实时刷新
    } 
  // }
};
