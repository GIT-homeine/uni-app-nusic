<template>
	<view class="broadcasting">
		<view class="ul">
			<view v-for="e in datalist" :key="e.id" class="li">{{e.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist: [{
					id: 0,
					title: "你的月亮我的心"
				}, {
					id: 1,
					title: "小蕊"
				}, {
					id: 2,
					title: "朋友圈"
				}, ]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.broadcasting {
		background: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		.ul {
			.li {
				width: 750rpx;
				height: 65rpx;
				line-height: 65rpx;
				border-bottom: 1px solid #f2f2f2;
				padding-left: 10rpx;
			}
		}
	}
</style>
