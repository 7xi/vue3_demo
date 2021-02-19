import { State } from "@/types"

const state: State = {
	// 系统常用配置文件
	appConfig: {
		appSafeAreaHeader: 0, //app下头部高度
		appSafeAreaFooter: 0, //app下底部高度
	},
	// 关于我请求
	about: {
		name: '',
		local: '',
		likes: [],
	},
}

export default state
