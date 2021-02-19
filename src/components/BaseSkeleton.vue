<template>
	<div>
		<van-skeleton title :avatar="SkeletonType" :row="row" :avatar-shape="shape" :avatar-size="avatarSize" />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
	name: 'BaseSkeleton',
	props: {
		// 骨架图头像占位图类型 | 默认无头像 | true | false
		SkeletonType: {
			type: Boolean,
			default: false,
		},
		// 骨架图头像占位图形状 | 默认头像类型 | round | square

		shape: {
			type: String,
			default: 'round',
		},
		// 骨架图头像占位图大小 | 默认32px

		avatarSize: {
			type: String,
			default: '32',
		},
		// 骨架图显示行数 | 默认3行

		row: {
			type: Number,
			default: 3,
		},
	},
})
</script>
