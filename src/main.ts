import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/router/permission';
import 'lib-flexible/flexible'

import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Skeleton, Cell, CellGroup, List, PullRefresh, Tab, Tabs, Tag, Image, Button, Loading,Icon } from 'vant'
import 'vant/lib/index.css'
import '@/assets/styles/base.less' //初始化样式

const app = createApp(App)

app.use(NavBar)
	.use(Tabbar)
	.use(TabbarItem)
	.use(Swipe)
	.use(SwipeItem)
	.use(Skeleton)
	.use(Cell)
	.use(CellGroup)
	.use(List)
	.use(PullRefresh)
	.use(Tab)
	.use(Tabs)
	.use(Tag)
	.use(Image)
	.use(Button)
	.use(Loading)
	.use(Icon)
app.use(router)
app.use(store)

app.mount('#app')
