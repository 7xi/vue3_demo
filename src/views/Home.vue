<template>
	<layout>
		<template v-slot:header>
			<van-nav-bar title="首页" />
		</template>
		<van-swipe class="banner">
			<van-swipe-item v-for="(item, index) in banner" :key="index">
				<van-image width="100%" :src="item.image">
					<template v-slot:loading>
						<van-loading type="spinner" size="20" />
					</template>
				</van-image>
			</van-swipe-item>
		</van-swipe>

		{{ url }}

		<template v-slot:footer>
			<base-tabbar active="home" />
		</template>
	</layout>
</template>

<script lang="ts">
interface StateProps {
	banner: []
	url: string
}
declare const window: Window & { api: any }
import { Toast } from 'vant'
import { defineComponent, reactive, onMounted, toRefs } from 'vue'
import Layout from '@/components/Layout.vue'
import BaseTabbar from '@/components/BaseTabbar.vue'
import { reqBanner } from '@/service/api.ts'
export default defineComponent({
	name: 'Home',
	components: {
		Layout,
		BaseTabbar,
	},
	setup() {
		const state: StateProps = reactive({
			banner: [],
			url: '',
		})
		const getBanner = async () => {
			Toast.loading({ message: '加载中...', forbidClick: true })
			const result: any = await reqBanner({})
			state.banner = result.data.list
			Toast.clear()
		}
		onMounted(() => {
			getBanner()
			try {
				state.url = window.location.host
			} catch (error) {
				console.log(error)
			}
		})
		return {
			...toRefs(state),
		}
	},
})
</script>

<style lang="less" scoped>
.banner {
	height: 190px;
	img {
		width: 100%;
	}
}
</style>
