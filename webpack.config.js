var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
         teams: './js/teams.js',
         team_link: './js/components/team_link.js',
     },
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };