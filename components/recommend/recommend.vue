<template>
	<view class="recommend ">
		<view class="bigTitle">
			<span class="title">推荐歌单</span>
			<span class="titleright">歌单广场</span>
		</view>
		<view class="recommend-wraper">
			<view class="list-box" v-for="e in list" :key="e.id">
				<view class="icon"><i class="icon1 iconfont">&#xe615;</i>{{e.num}}</view>
				<image class="img" :src="e.img" mode=""></image>
				<view class="name">
					{{e.text}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						id:0,num:"19万",img:"../../static/nearby/1.jpg",text:"翻唱|男声"
					},
					{
						id:1,num:"19万",img:"../../static/nearby/2.jpg",text:"翻唱|男声"
					},
					{
						id:2,num:"19万",img:"../../static/nearby/3.jpg",text:"翻唱|男声"
					},
					{
						id:3,num:"19万",img:"../../static/nearby/4.jpg",text:"翻唱|男声"
					},
					{
						id:4,num:"19万",img:"../../static/nearby/4.jpg",text:"翻唱|男声"
					},
					{
						id:5,num:"19万",img:"../../static/nearby/3.jpg",text:"翻唱|男声"
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@font-face {
	  font-family: 'iconfont';  /* project id 1545814 */
	  src: url('//at.alicdn.com/t/font_1545814_6gy6qydo8wb.eot');
	  src: url('//at.alicdn.com/t/font_1545814_6gy6qydo8wb.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1545814_6gy6qydo8wb.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1545814_6gy6qydo8wb.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1545814_6gy6qydo8wb.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1545814_6gy6qydo8wb.svg#iconfont') format('svg');
	}
	.recommend {
		.bigTitle {
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			background: #fff;
			margin-top: 20rpx;

			.title {
				font-size: 30rpx;
				font-weight: bold;
				height: 18px;
				width: 150rpx;
				line-height: 18px;
				text-align: center;
			}

			.titleright {
				border: 1px solid #ccc;
				border-radius: 10px;
				height: 18px;
				width: 150rpx;
				line-height: 18px;
				text-align: center;
			}
		}

		.recommend-wraper {
			display: flex;
			justify-content: space-around;
			flex-wrap:wrap;
			.list-box {
				background: #fff;
				padding: 5px;
				position: relative;
				.icon{
					position: absolute;
					top: 0rpx;
					right: 0rpx;
					z-index: 2;
					display: flex;
					justify-content: center;
					width: 144rpx;
					height: 20px;
					line-height: 20px;
					margin-top: 10px;
					color: #fff;
					.icon1{
						width: 20px;
						height: 20px;
						font-family:iconfont;
					}
				}
				.img {
					width: 230rpx;
					height: 230rpx;
					border-radius: 20rpx;
				}
				.name{
					
				}
			}
		}
	}
</style>
