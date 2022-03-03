<template>
	<view>
		<view class="uni-container">
			<view class="v-title">
				<text>磁粉探伤系统</text>
				<!-- <image src="../../static/index/ic_title.png"></image> -->
			</view>
			<view class="uni-panel" v-for="(item, index1) in list" :key="index1">
				<view class="uni-panel-h"  @click="triggerCollapse(index1, index1)">
					<view v-if="item.open">
						<image src="../../static/index/ic_select.png"></image>
						<text class="uni-panel-text" style="color: #F0AD4E;">{{item.name}}</text>
					</view>
					<view v-else>
						<image src="../../static/index/ic_select_n.png"></image>
						<text class="uni-panel-text" >{{item.name}}</text>
					</view>
				</view>
				<view class="uni-panel-c" v-if="item.open">
					<view 
					 class="uni-navigate-item" v-for="(item2,index) in item.pages" :key="index" @click="goDetailPage(item2, index)">
						<text>{{item2.name ? item2.name : item2}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '数据管理',
						open: true,
						pages: [{
							select:true,
							page:'image',
							name:'图片管理'
						},{
							select:false,
							page:'video',
							name:'视频管理'
						}
						]
					}, {
						name: '人员管理',
						open: false,
						url:"admin/admin",
						pages: []
					}, {
						name: '问题反馈',
						open: false,
						url:"problem/problem",
						pages: []
					}
				]
			}
		},
		methods: {
			triggerCollapse(e, id) {
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[i].open;
					} else {
						this.list[i].open = false;
					}
				}
				if (this.list[e].pages.length==0) {
					const url = '/pages/' + this.list[e].url
					console.log(url);
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: url
						})
					} else {
						uni.navigateTo({
							url: url
						})
					}
					return;
				}
			},
			goDetailPage(e, num) {
				if (e.page.length !=0) {
					const url = '/pages/' + e.page + '/' + e.page
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: url
						})
					} else {
						uni.navigateTo({
							url: url
						})
					}
				} else {
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: e.url
						})
					} else {
						uni.navigateTo({
							url: e.url
						})
					}
				}
			}
		}
	}
</script>

<style>
	@import './leftwindow.css';
	
</style>
