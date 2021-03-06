// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
import theme from './src/themes';
const API_URL = process.env.API_URL;

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production'),
	__DEV__: false,
	'process.env.API_URL': JSON.stringify(API_URL),
};

export default {
	mode: 'production',
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json'],
	},
	devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
	entry: path.resolve(__dirname, 'src/index'),
	target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		filename: '[name].js',
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly

		// Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
		new webpack.DefinePlugin(GLOBALS),

		// Generate an external css file with a hash in the filename
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),

		// Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
		new HtmlWebpackPlugin({
			template: 'src/index.ejs',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			// Note that you can add custom options here if you need to handle other custom logic in index.html
			// To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
			trackJSToken: '',
		}),

		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
			noInfo: true, // set to false to see a list of every file being bundled.
			options: {
				sassLoader: {
					includePaths: [path.resolve(__dirname, 'src', 'scss')],
				},
				lessLoader: {
					includePaths: [path.resolve(__dirname, 'src', 'less')],
				},
				context: '/',
				postcss: () => [autoprefixer],
			},
		}),
		new CopyWebpackPlugin([{ from: 'public', to: 'public' }]),
		new OptimizeCssAssetsPlugin(),
		// new BundleAnalyzerPlugin()
	],
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
	optimization: {
		minimizer: [
			new TerserPlugin({
				/* additional options here */
			}),
		],
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						const separateChunkPackageNames = ['antd'];
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/
						)[1];
						let chunkName;

						if (separateChunkPackageNames.includes(packageName)) {
							chunkName = `npm.${packageName}`;
						} else {
							chunkName = 'vendors~main';
						}

						return chunkName;
					},
				},
			},
		},
	},
};
