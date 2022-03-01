<template>
	<view class="content-list">
		<view class="goods-item" v-for="(item, index) in goods" :key="index" @click="detail(item, index)">
			<image :src="item.img"></image>
			<!-- <video id="myVideo" src="http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4"
			                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video> -->
			<view class="goods-item-content">
				<view class="v-title">{{item.littleTitle}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MkGoodsList",
		props: {
			goods: {
				type: Array,
			},
		},
		methods: {
			detail(item, index) {
				this.$emit("clickItem", item, index);
			}
		},
	}
</script>

<style lang="scss">
	.content-list {
		width: 100%;
		margin: 10px 19rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.goods-item {
		background-color: #ffffff;
		width: 16%;
		height: 18%;
		border-radius: 19rpx;
		margin: 20px 19rpx 19rpx 0;
	}
	.goods-item image {
		width: 100%;
		height: 300rpx;
		border-radius: 19rpx 19rpx 0 0;
	}
	.v-title {
		width: 100%;
		font-size: 14px;
		text-align: center;
	}
</style>
