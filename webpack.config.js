var path = require('path')

module.exports = {
	entry: './src/Scroller.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'Scroller.js' 
	},
	module: {
		loaders: [
			{ test: require.resolve("./src/Scroller"), loader: "expose?Scroller" }
		]
	}
}