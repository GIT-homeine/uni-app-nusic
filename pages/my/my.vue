<template>
	<view class="container">
		<ul class="ul">
			<li class="section" v-for="(item,i) in list" :key="i">
				<image class="image" :src="item.img"></image>
				<p class="p">{{item.text}}</p>
				<span class="span">
					<image class="imageright" src="../../static/image/youjiantou.png"></image>
				</span>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					img: "../../static/image/bendi.png",
					text: "本地歌曲"
				}, {
					img: "../../static/image/love_icon.png",
					text: "我的喜欢"
				}, {
					img: "../../static/image/diantai.png",
					text: "我的电台"
				}, {
					img: "../../static/image/favorite.png",
					text: "我的收藏"
				}, ]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		.ul {
			.section {
				display: flex;
				height: 40px;
				line-height: 40px;
				background: #fff;
				border-bottom: 1px solid #f2f2f2;
				display: flex;
				align-items: center;
				padding: 10px;

				.image {
					flex: 0 0 30rpx;
					height: 30rpx;
					margin-right: 10px;
				}

				.p {
					flex: 1;
				}

				.span {
					flex: 0 0 10rpx;
					.imageright{
						width: 30rpx;
						height: 30rpx;
					}
				}

			}
		}
	}
</style>
