const path = require("path");


module.exports = {
	entry : {
		index: './src/assets/js/script.js',
		info: './src/assets/js/info.js'
	},
	output : {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].bundle.js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},
	module : {
		rules: [
			{
				test: /\.css$/,
				use : [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}]
			},
			{
				test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
			            outputPath: './fontawesome',  
					}
				}]
			}
		]
	},
	plugins: [

		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject : true,
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: "./src/info.html",
			filename: "info.html",
			inject: true,
			chunks: ['info']
		})
	]

}