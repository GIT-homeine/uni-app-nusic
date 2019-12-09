<template>
	<view class="Cloudvillage">
		<!-- nav -->
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in topbar" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{item.text}}
			</view>
		</scroll-view>
		<!-- 搜索 -->
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频"
				 confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" @click="seach">搜索</button>
			</view>
		</view>
		<!-- 广场 -->
		<view class="square" v-if="isbarck==0">
			<view class="wrapper">
				<view class="list" v-for="(item,index) in squarelist" :key="index" @click="music">
					<view class="img">
						<image :src="item.url"></image>
					</view>
					<view class="name">{{item.text}}</view>
				</view>
			</view>

		</view>
		<!-- 附近 -->
		<view class="nearby" v-else-if="isbarck==1">
			附近
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				topbar: [{
						id: 0,
						text: "广场"
					},
					{
						id: 1,
						text: "附近"
					},
				],
				// 附近和广场切换
				isbarck: 0,
				// 广场音乐列表
				squarelist: [{
						url: "../../static/nearby/1.jpg",
						text: "静听盛夏的声音"
					},
					{
						url: "../../static/nearby/2.jpg",
						text: "静听盛夏的声音"
					},
					{
						url: "../../static/nearby/3.jpg",
						text: "静听盛夏的声音"
					},
					{
						url: "../../static/nearby/4.jpg",
						text: "静听盛夏的声音"
					},
				]
			};
		},
		methods: {
			// nav
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				console.log(e.currentTarget.dataset.id)
				this.isbarck = e.currentTarget.dataset.id
			},
			// 搜索
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			seach() {

			},
			music() {
				uni.navigateTo({
					url: '../music/music'
				})
			}
		}
	}
</script>

<style lang="scss">
	.Cloudvillage {
		.nav {
			.cu-item {
				color: #d81e06;
			}
		}
		.search {
			.action {
				.cu-btn {
					background: #d81e06;
				}
			}
		}
		.square {
			padding: 10px;
			.wrapper {
				display: flex;
				flex-wrap: wrap;
				.list {
					background: #fff;
					width: 330rpx;
					height: 550rpx;
					border-radius: 15rpx;
					margin: 13rpx;
					.img {
						text-align: center;
						width: 330rpx;
						height: 500rpx;
						image {
							width: 330rpx;
							height: 500rpx;
							border-top-right-radius: 15rpx;
							border-top-left-radius: 15rpx;
						}
					}
				}
			}

		}

	}
</style>
