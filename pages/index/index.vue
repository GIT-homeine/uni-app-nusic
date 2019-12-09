<template>
	<view class="container">
		<!-- 轮播 -->
		<banner></banner>
		<view class="menu">
			<view class="icon-wraper">
				<p class="icon">
					<i class="icon1 iconfont">&#xe642;</i>
				</p>
				<p>每日推荐</p>
			</view>
			<view class="icon-wraper">
				<p class="icon">
					<i class="icon1 iconfont">&#xe636;</i>
				</p>
				<p>歌单</p>
			</view>
			<view class="icon-wraper">
				<p class="icon">
					<i class="icon1 iconfont">&#xe6c5;</i>
				</p>
				<p>排行榜</p>
			</view>
			<view class="icon-wraper" @click="broadcasting">
				<p class="icon">
					<i class="icon1 iconfont">&#xe65b;</i>
				</p>
				<p>电台</p>
			</view>

		</view>
		<recommend></recommend>
	</view>
</template>

<script>
	import banner from "@/components/banner/banner.vue"
	import recommend from "@/components/recommend/recommend.vue"
	export default {
		components: {
			banner,
			recommend
		},
		methods:{
			broadcasting(){
				uni.navigateTo({
					url:"../broadcasting/broadcasting"
				})
			}
		}

	}
</script>

<style lang="scss">
	@font-face {
		font-family: 'iconfont';
		/* project id 1545814 */
		src: url('//at.alicdn.com/t/font_1545814_txfc5fktfek.eot');
		src: url('//at.alicdn.com/t/font_1545814_txfc5fktfek.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1545814_txfc5fktfek.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1545814_txfc5fktfek.woff') format('woff'),
			url('//at.alicdn.com/t/font_1545814_txfc5fktfek.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1545814_txfc5fktfek.svg#iconfont') format('svg');
	}

	.container {
		.menu {
			margin-top: 10px;
			display: flex;
			justify-content: space-around;
			
			.icon-wraper {
				width: 187rpx;
				height: 88px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: #fff;

				.icon {
					width: 100rpx;
					height: 100rpx;
					background: red;
					border-radius: 50%;

					.icon1 {
						font-family: "iconfont";
						font-size: 25px;
						color: #fff;
						line-height: 100rpx;
						text-align: center;
					}
				}
			}
		}


	}
</style>
