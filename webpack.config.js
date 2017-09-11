// path module for physical path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require("webpack");

// export
module.exports = {
	// input
	entry: {
		main: "./src/app.js",
		vendor: "./src/vendor.js"
	}
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
				test: /\.css$/,
				loader: ["style-loader", "css-loader"]
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
