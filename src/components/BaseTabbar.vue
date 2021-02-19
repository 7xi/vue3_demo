<template>
	<div>
		<ul class="tabbar flex-box-x">
			<router-link to="/" tag="li" class="item col-xs-x flex-xy-center" active-class="active" :class="active === 'home' ? 'active' : ''">
				<div class="box">
					<van-icon name="home-o" size="26"></van-icon>
					<div class="name">首页</div>
				</div>
			</router-link>
			<router-link to="/news" tag="li" class="item col-xs-x flex-xy-center" active-class="active" :class="active === 'news' ? 'active' : ''">
				<div class="box">
					<van-icon name="newspaper-o" size="26"></van-icon>
					<div class="name">新闻</div>
				</div>
			</router-link>
			<router-link to="/products" tag="li" class="item col-xs-x flex-xy-center" active-class="active" :class="active === 'products' ? 'active' : ''">
				<div class="box">
					<van-icon name="setting-o" size="26"></van-icon>
					<div class="name">产品</div>
				</div>
			</router-link>
			<router-link to="/mine" tag="li" class="item col-xs-x flex-xy-center" active-class="active" :class="active === 'mine' ? 'active' : ''">
				<div class="box">
					<van-icon name="friends-o" size="26"></van-icon>
					<div class="name">我的</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
	name: 'BaseTabbar',
	props: {
		active: {
			type: String,
			default: 'home',
		},
	},
})
</script>

<style lang="less" scoped>
.tabbar {
	height: 50px;
	box-sizing: border-box;
	padding: 5px 0;
	.item {
		color: #999;
		&.active {
			color: #2196f3;
		}
		.name {
			line-height: 1;
			font-size: 12px;
		}
	}
}
</style>
