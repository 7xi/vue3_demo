<template>
	<div id="app">
		<router-view class="router-view" v-slot="{ Component }">
			<transition :name="transitionName">
				<keep-alive :include="['Home', 'News', 'Products']">
					<component :is="Component" />
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transitionName: 'slide-left',
		}
	},
	watch: {
		$route(to, from) {
			if (to.meta.index > from.meta.index) {
				this.transitionName = 'slide-left'
			} else if (to.meta.index < from.meta.index) {
				this.transitionName = 'slide-right'
			} else {
				this.transitionName = ''
			}
		},
	},
}
</script>

<style lang="less">
html,
body {
	height: 100%;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	height: 100%;
	will-change: transform;
	transition: all 300ms;
	position: absolute;
	backface-visibility: hidden;
}
.slide-right-enter {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
</style>
