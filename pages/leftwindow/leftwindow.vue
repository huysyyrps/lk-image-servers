<template>
	<view>
		<view class="uni-container">
			<view class="uni-panel" v-for="(item, index) in list" :key="index">
				<view class="uni-panel-h"  @click="triggerCollapse(index, index)">
					<text class="uni-panel-text">{{item.name}}</text>
				</view>
				<view class="uni-panel-c" v-if="item.open">
					<view 
					 class="uni-navigate-item" v-for="(item2,index) in item.pages" :key="index" @click="goDetailPage(item2, index)">
						<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
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
							page:'image',
							name:'图片数据'
						},{
							page:'video',
							name:'视频数据'
						}
						]
					}, {
						name: '设备管理',
						open: false,
						pages: [
							{
								page:'image',
								name:'图片数据'
							},{
								page:'video',
								name:'视频数据'
							}
						]
					}, {
						name: '人员管理',
						open: false,
						url:"admin/admin",
						pages: [{
								page:'admin',
								name:'管理员'
							}]
					}, {
						name: '问题反馈',
						open: false,
						url:"problem/problem",
						pages: [{
								page:'problem',
								name:'问题反馈'
							}]
					}
				]
			}
		},
		methods: {
			triggerCollapse(e, id) {
				
				if (this.list[e].pages.length==1) {
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
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[i].open;
					} else {
						this.list[i].open = false;
					}
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
