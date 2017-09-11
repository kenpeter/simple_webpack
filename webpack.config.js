// path module for physical path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require("webpack");

// export
module.exports = {
	// input
	entry: {
		main: "./src/app.ts",
		vendor: "./src/vendor.js"
	},
	
	// no need to to file suffix
	resolve: {
		extensions: ['.js', '.ts']
	},

	// output
  output: {
		// ./dists/x.js
		// ./dist/y.js
  	path: path.resolve(__dirname, 'dist'), // output directory
    filename: "[name].js" // name of the generated bundle
  },

	module: {
		rules: [
			{
      	test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },

			{
      	test: /\.ts$/,
        enforce: "pre",
        loader: 'tslint-loader'
      },

			{
				test: /\.css$/,
				loader: ["style-loader", "css-loader"]
			},

			{
   	 		test: /\.scss$/,
				loader: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
			}		
		]
	},

	// array of obj
	plugins : [
		// template util
  	new HtmlWebpackPlugin({
			// actual template
    	template: "src/index.html",
      inject : "body"
    }),

		new webpack.optimize.CommonsChunkPlugin({
    	name: 'vendor'
    }) 
  ]
};
