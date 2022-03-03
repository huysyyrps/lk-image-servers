<template>
	<view class="content-list">
		<view class="goods-item" v-for="(item, index) in goods" :key="index" @click="detail(item, index)">
				<video :src="item.video" v-show="tag=='video'"></video>
				<image :src="item.img" v-show="tag=='image'"></image>
				<view class="v-title">{{item.littleTitle}}</view>
				<checkbox class="cb" checked="true" v-if="show" style="display: inline;"></checkbox>
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
			show:{
				type:Boolean,
			},
			tag:{
				type:Boolean,
			}
		},
		methods: {
			detail(item, index) {
				this.$emit("clickItem", item, index);
			}
		},
	}
</script>

<style lang="scss">
	.cb{
		display: flex;
		z-index: 999;
		position: absolute;
		cursor: pointer;
		justify-content: flex-end;
		align-items: flex-end;
		right: 5px;
		top: 5px;
	}
	.content-list {
		width: 100%;
		margin: 2px 19rpx 0 19rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.goods-item {
		position: relative;
		background-color: #ffffff;
		width: 16%;
		height: 18%;
		border-radius: 19rpx;
		margin: 0px 19rpx 26px 0;
	}
	.u-badge{
		width: 100%;
	}

	.goods-item image {
		width: 100%;
		height: 295rpx;
		border-radius: 19rpx 19rpx 19rpx 19rpx;
	}
	
	.goods-item video {
		width: 100%;
		height: 295rpx;
		border-radius: 19rpx 19rpx 19rpx 19rpx;
	}

	.v-title {
		width: 100%;
		font-size: 14px;
		text-align: center;
	}
</style>
