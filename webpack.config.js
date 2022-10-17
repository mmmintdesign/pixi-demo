const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:[ "./src/index.ts"],
	mode: "development", //production
	target: "web",
	devtool: "eval", //source-map
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			// {
			// 	test: /\.css$/i,
			// 	use: ["style-loader", "css-loader"],
			// },
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Something",
			filename: "index.html",
			// filename: path.join(__dirname, "dist/index.html"),
			template: path.join(__dirname, "src/index.html"),
		}),
	],

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
