/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	target: 'web',
	entry: {
		index: ['babel-polyfill', path.resolve(SRC_DIR, 'index.js')],
	},
	output: {
		path: DIST_DIR,
		filename: 'index.js',
		publicPath: '/',
	},
	devServer: { contentBase: './build', historyApiFallback: true, port: 8080 },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			inject: true,
		}),
	],
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /.(jpg|jpeg|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]',
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
