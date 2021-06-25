const path = require('path');
import theme from './src/themes';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import autoprefixer from 'autoprefixer';


module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		open: true,
		clientLogLevel: 'silent',
		port: 3000,
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				loader: 'url-loader?name=[name].[ext]',
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader:
					'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]',
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				loader:
					'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]',
			},
			{
				test: /\.svg(\?v=\d+.\d+.\d+)?$/,
				loader:
					'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]',
			},
			{ test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
			{ test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
			{
				test: /(\.css|\.scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader?sourceMap',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('autoprefixer')],
						},
					},
					{
						loader: 'sass-loader?sourceMap',
					},
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader?sourceMap',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => autoprefixer,
						},
					},
					{
						loader: 'less-loader',
						options: {
							modifyVars: theme,
							javascriptEnabled: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
