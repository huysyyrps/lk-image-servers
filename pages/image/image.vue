<template>
	<view>
		<title-project @moreClick="moreClick">
			<text slot="tag1">{{image}}</text>
			<text slot="num1">{{num1}}</text>
			<text slot="project1">{{project1}}</text>

			<text slot="tag2">{{image}}</text>
			<text slot="num2">{{num2}}</text>
			<text slot="project2">{{project2}}</text>

			<text slot="tag3">{{image}}</text>
			<text slot="num3">{{num3}}</text>
			<text slot="project3">{{project3}}</text>

			<text slot="tag4">{{image}}</text>
			<text slot="num4">{{num4}}</text>
			<text slot="project4">{{project4}}</text>

			<text slot="tag5">{{image}}</text>
			<text slot="num5">{{num5}}</text>
			<text slot="project5">{{project5}}</text>
		</title-project>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image: "图片",
				num1: "1234",
				num2: "1235",
				num3: "1236",
				num4: "1237",
				num5: "1238",
				project1: '测试项目1',
				project2: '测试项目2',
				project3: '测试项目3',
				project4: '测试项目4',
				project5: '测试项目5',
			}
		},
		methods: {
			moreClick() {
				this.current = 4;
			}
		}
	}
</script>

<style>

</style>
