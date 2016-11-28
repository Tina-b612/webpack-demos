module.exports = {
	devtool:'eval-source-map', 		//生成Source Maps的配置

	//“__dirname”是Node.js中的一个全局变量，它指向当前执行脚本所在的目录。
	entry: __dirname + "/app/main.js",
	output: {
		psth: __dirname + "/public",
		filename: "bundle.js"
	},

	module: {
		loaders: [	
			{
				test: /\.json$/,	//解析json的配置
				loader: "json"
			},
			{
				test: /\.js$/,				//解析js（react,es6）的配置
				exclude: /node_modules/,	//此文件夹的内容不解析
				loader: 'babel',			//使用babel解析
				qurey: {
					//使用.babelrc配置
					/*presets: ['es2015','react']	//babel解析时的配置*/
				}
			},
			{
				test:/\.css$/,				//解析css文件
				loader: 'style!css?modules!postcss' 		//添加对样式表的处理
			}
		]
	},

	postcss: [
		require('autoprefixer')
	],

	devServer: {
		contentBase: "./public",	//本地服务器所加载的页面所在的目录
		colors: true,				//终端中输出结果为彩色
		historyApiFallback: true,	//不跳转
		inline: true				//实时刷新
	}
}