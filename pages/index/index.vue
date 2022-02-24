<template>
	<view class="v-common">
		<view class="v-title">
			<text>磁粉探伤系统</text>
			<image src="../../static/index/ic_title.png"></image>
		</view>

		<view class="v-content">
			<!-- 左侧菜单 -->
			<view class="v-lift">
				<view class="v-lift-item" v-if="imgTag" @click="imgSelect">
					<image src="../../static/index/ic_select.png"></image>
					<text>图片资源</text>
				</view>
				<view class="v-lift-item-n" v-else @click="imgSelect">
					<image src="../../static/index/ic_select_n.png"></image>
					<text>图片资源</text>
				</view>

				<view class="v-lift-item" v-if="videoTag" @click="videoSelect">
					<image src="../../static/index/ic_select.png"></image>
					<text>视频资源</text>
				</view>
				<view class="v-lift-item-n" v-else @click="videoSelect">
					<image src="../../static/index/ic_select_n.png"></image>
					<text>视频资源</text>
				</view>

				<view class="v-lift-item" v-if="explainTag" @click="explainSelect">
					<image src="../../static/index/ic_select.png"></image>
					<text>操作说明</text>
				</view>
				<view class="v-lift-item-n" v-else @click="explainSelect">
					<image src="../../static/index/ic_select_n.png"></image>
					<text>操作说明</text>
				</view>

				<view class="v-lift-item" v-if="problemTag" @click="problemSelect">
					<image src="../../static/index/ic_select.png"></image>
					<text>问题反馈</text>
				</view>
				<view class="v-lift-item-n" v-else @click="problemSelect">
					<image src="../../static/index/ic_select_n.png"></image>
					<text>问题反馈</text>
				</view>

				<view class="v-lift-item" v-if="adminTag" @click="adminSelect">
					<image src="../../static/index/ic_select.png"></image>
					<text>添加管理员</text>
				</view>
				<view class="v-lift-item-n" v-else @click="adminSelect">
					<image src="../../static/index/ic_select_n.png"></image>
					<text>添加管理员</text>
				</view>
			</view>

			<!-- 分割线 -->
			<view class="v-line"></view>

			<!-- 内容区域 -->
			<view class="v-data">
				<swiper class="swiper"  :duration="0" :vertical="true" :disable-touch="true" :current="current">
					<swiper-item >
						<title-project>
							<text slot="num1">{{num1}}</text>
							<text slot="project1">{{project1}}</text>
							
							<text slot="num2">{{num2}}</text>
							<text slot="project2">{{project2}}</text>
							
							<text slot="num3">{{num3}}</text>
							<text slot="project3">{{project3}}</text>
							
							<text slot="num4">{{num4}}</text>
							<text slot="project4">{{project4}}</text>
							
							<text slot="num5">{{num5}}</text>
							<text slot="project5">{{project5}}</text>
						</title-project>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
				</swiper>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgTag: true,
				videoTag: false,
				explainTag: false,
				problemTag: false,
				adminTag: false,
				
				current: 0,
				num1:"1234",
				num2:"1235",
				num3:"1236",
				num4:"1237",
				num5:"1238",
				project1:'测试项目1',
				project2:'测试项目2',
				project3:'测试项目3',
				project4:'测试项目4',
				project5:'测试项目5',
			}
		},
		onLoad() {

		},
		methods: {
			imgSelect() {
				this.imgTag = true;
				this.videoTag = false;
				this.explainTag = false;
				this.problemTag = false;
				this.adminTag = false;
				this.current = 0;
			},
			videoSelect() {
				this.imgTag = false;
				this.videoTag = true;
				this.explainTag = false;
				this.problemTag = false;
				this.adminTag = false;
				this.current = 1;
			},
			explainSelect() {
				this.imgTag = false;
				this.videoTag = false;
				this.explainTag = true;
				this.problemTag = false;
				this.adminTag = false;
			},
			problemSelect() {
				this.imgTag = false;
				this.videoTag = false;
				this.explainTag = false;
				this.problemTag = true;
				this.adminTag = false;
			},
			adminSelect() {
				this.imgTag = false;
				this.videoTag = false;
				this.explainTag = false;
				this.problemTag = false;
				this.adminTag = true;
			},
		}
	}
</script>

<style>
	@import "../../static/index/index.css";
</style>
