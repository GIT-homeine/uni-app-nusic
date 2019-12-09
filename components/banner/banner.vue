<template>
	<view class="container">
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		created(){
			
		},
		data() {
			return {
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/banner/1.jpg'
				}, {
					id: 1,
					type: 'image',
					url: '../../static/banner/2.jpg'
				}, {
					id: 2,
					type: 'image',
					url: '../../static/banner/3.jpg'
				}, {
					id: 3,
					type: 'image',
					url: '../../static/banner/4.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}],
			}
		}
	}
</script>

<style lang="scss">
	.container {}
</style>
