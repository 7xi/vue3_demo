import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Products from '@/views/Products.vue'
import Mine from '@/views/Mine.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		meta: {
			index: 1,
			isback: false,
		},
		component: Home,
	},
	{
		path: '/news',
		name: 'News',
		meta: {
			index: 1,
			isback: false,
		},
		component: News,
	},
	{
		path: '/products',
		name: 'Products',
		meta: {
			index: 1,
			isback: false,
		},
		component: Products,
	},
	{
		path: '/mine',
		name: 'Mine',
		meta: {
			index: 1,
			isback: false,
		},
		component: Mine,
	},
	{
		path: '/show',
		name: 'Show',
		meta: {
			index: 2,
			isback: true,
		},
		component: () =>
			import(/* webpackChunkName: "show" */ "../views/Show.vue")
	},
	{
		path: '/404',
		name: '404',
		meta: {
			index: 2,
			isback: true,
		},
		component: () =>
			import(/* webpackChunkName: "404" */ "../views/404.vue")
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
})

export default router
