<template>
	<view>
		<title-bar leftData="视频管理->视频列表" rightData="" @moreClick="moreClick"></title-bar>
		<view class="v-retrieval">
			<view class="v-fond">
				<view class="v-condition">
					<text class="tv-con">关键字：</text>
					<input class="in-retrieval" placeholder="关键字检索" />
				</view>
				<view class="v-condition">
					<text class="tv-con">项目名称：</text>
					<input class="in-retrieval" placeholder="项目名称检索" />
				</view>
				<view class="v-condition">
					<text class="tv-con">日期：</text>
					<uni-datetime-picker type="date" :value="single" start="2021-3-20" end="2030-6-20"
						@change="change" />
				</view>
				<view class="v-button">
					<button class="btn-retrieval">检索</button>
					<button class="btn-selece" @click="allSelect">全选</button>
					<button class="btn-delect">删除</button>
				</view>
			</view>
		</view>
		<mk-goods-list :goods="goods" :show="show" :tag="tag" @clickItem="goodsItem"></mk-goods-list>
		<uni-pagination class="uni-page" title="标题文字" show-icon="true" :total=imageNum current="0" pageSize=24>
		</uni-pagination>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: "2021-04-3",
				tag: "",
				imgSrc: "",
				goods: [{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					}, {
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						video: "http://stream.iqilu.com/vod_bag_2016//2020/02/16/903BE158056C44fcA9524B118A5BF230/903BE158056C44fcA9524B118A5BF230_H264_mp4_500K.mp4",
						fixed: false
					},
				],
				imageNum: 24,
				show: false
			}
		},
		onLoad: function(option) {
			const item = option.tag;
			this.tag = item;
			console.log(item)
			this.single = Date.now();
		},
		methods: {
			// goodsItem(item, e) {
			// 	console.log(item.title);
			// 	console.log(e);
			// 	this.imgSrc = this.goods[e].img;
			// 	console.log(this.imgSrc);
			// 	this.$refs.popup.open('center')

			// },
			delect(item, e) {
				console.log(item.title);
				console.log(e);
				this.$refs.popup.close()
			},
			allSelect() {
				this.show = !this.show
			}
		},
	}
</script>

<style>
	@import './more_video.css';
</style>
