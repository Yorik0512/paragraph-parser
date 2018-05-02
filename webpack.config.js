var path = require('path')

function resolvef (dir) {
  return path.join(__dirname, './', dir)
}

const resolve = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolvef('public')
  }
}

module.exports = [
  {
		name: "server",
		entry: "./main.js",
		output: {
			path: path.join(__dirname, "./dist"),
			filename: "main.js"
		},
		"target": "node",
		module: {
      rules: [
        { 
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    resolve
	},
	{
		name: "client",
		entry: "./public/index.js",
		output: {
			path: path.join(__dirname, "./public/dist"),
			filename: "index.js"
		},
		module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        { 
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    resolve
	}
  // entry: {
  //   main: './main.js',
  //   index: './public/index.js'
  // },
  // output: {
  //   path: path.join(__dirname, "dist"),
  //   filename: "[name].entry.js"
  // },
  // devtool: 'source-map',
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js',
  //     '@': resolve('public')
  //   }
  // },
  // module: {
  //   rules: [
  //     { 
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: "babel-loader"
  //   },
  //   {
  //     test: /\.vue$/,
  //     loader: 'vue-loader'
  //   }
  //   ]
  // },
  // "target": "node"
];