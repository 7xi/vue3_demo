module.exports = {
	publicPath: '',
	outputDir: 'dist',
	css: {
		loaderOptions: {
			less: {
				// 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
				lessOptions: {
					modifyVars: {
						// 直接覆盖变量
						'text-color': '#111',
						'border-color': '#eee',
					},
				},
			},
		},
	},
	// webpack-dev-server 相关配置
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.fastmock.site/mock/6d41e4a585f6e3529e633c2d4e78cbba',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
}