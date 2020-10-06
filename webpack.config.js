const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const config = {
		mode: isProd ? "production" : "development",
		entry: {
			index: "./src/index.tsx",
		},
		devtool: "inline-source-map",
    module: {
        rules: [
						{ 
								test: /\.tsx?$/,
                exclude: /node_modules/,
								use: 'babel-loader'
						},
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
			extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
		},
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html",
				filename: "index.html",
				inject: "body"
			})
		]
};

if (isProd) {
	config.optimization = {
		minimizer: [new TerserWebpackPlugin()]
	};
} else {
	config.devServer = {
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		stats: "errors-only",
		overlay: true
	};
};

module.exports = config;
