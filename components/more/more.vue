<template>
	<view>
		<mk-goods-list :goods="goods" @clickItem="goodsItem"></mk-goods-list>
		<uni-pagination class="uni-page" title="标题文字" show-icon="true" total=15 current="0" pageSize=15>
		</uni-pagination>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods: [{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					},
					{
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					}, {
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					}, {
						title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
						littleTitle: "思念、愿望",
						img: "https://pic1.zhimg.com/4373a4f045e5e9ae16ebd6a624bf6228_b.png",
						fixed: false
					}
				],
			}
		},
		methods: {
			goodsItem(item, e) {
				console.log(item.title);
				console.log(e);
			}
		}
	}
</script>

<style>

</style>
