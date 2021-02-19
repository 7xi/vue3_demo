<template>
	<layout>
		<template v-slot:header>
			<van-nav-bar left-text="返回" left-arrow title="暂无数据" @click-left="goBack" />
		</template>
		暂无数据
	</layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Layout from '@/components/Layout.vue'
export default defineComponent({
	name: '404',
	components: {
		Layout,
	},
	setup() {
		const router = useRouter()
		const goBack = () => {
			router.go(-1)
		}
		return {
			goBack,
		}
	},
})
</script>

<style lang="less" scoped></style>
