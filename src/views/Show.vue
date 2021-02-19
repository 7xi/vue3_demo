<template>
	<layout>
		<template v-slot:header>
			<van-nav-bar left-text="返回" left-arrow title="详情页" @click-left="goBack" />
		</template>
		详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页详情页
	</layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Layout from '@/components/Layout.vue'
export default defineComponent({
	name: 'Show',
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
