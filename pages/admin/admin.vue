<template>
	<view class="v-comment">
		<title-bar leftData="人员管理" rightData="" @moreClick="moreClick"></title-bar>
		<view class="v-retrieval">
			<view class="v-fond">
				<view class="v-condition">
					<text class="tv-con">用户名：</text>
					<input class="in-retrieval" placeholder="用户名检索" />
				</view>
				<view class="v-condition">
					<text class="tv-con">部门：</text>
					<input class="in-retrieval" placeholder="部门检索" />
				</view>
				<view class="v-condition">
					<text class="tv-con">手机号：</text>
					<input class="in-retrieval" placeholder="手机号检索" />
				</view>
				<view class="v-button">
					<button class="btn-retrieval">检索</button>
					<button class="btn-selece" @click="allSelect">全选</button>
					<button class="btn-delect">删除</button>
				</view>
			</view>
		</view>
		<view class="v-table">
			<uni-table class="u-table" border stripe emptyText="暂无更多数据" type="selection" >
				<!-- 表头行 -->
				<uni-tr>
					<uni-th class="u-th-num" align="center" style="width: 5%;">序号</uni-th>
					<uni-th class="u-th-name" align="center" style="width: 10%;">名字</uni-th>
					<uni-th class="u-th-depart" align="center" style="width: 15%;">部门</uni-th>
					<uni-th class="u-th-work" align="center" style="width: 10%;">职务</uni-th>
					<uni-th class="u-th-username" align="center" style="width: 10%;">账号</uni-th>
					<uni-th class="u-th-phone" align="center" style="width: 15%;">电话</uni-th>
					<uni-th class="u-th-idcard" align="center" style="width: 20%;">身份证号</uni-th>
					<uni-th class="u-th-setting" align="center" style="width: 15%;">设置</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr v-for="(item,index) in tabList" :key="index" >
					<uni-td align="center" style="height: 45px;">{{index}}</uni-td>
					<uni-td align="center" style="height: 45px;">{{item.name}}</uni-td>
					<uni-td align="center" style="height: 45px;">{{item.depart}}</uni-td>
					<uni-td align="center" style="height: 45px;">{{item.work}}</uni-td>
					<uni-td align="center" style="height: 45px;">{{item.username}}</uni-td>
					<uni-td align="center" style="height: 45px;">{{item.phone}}</uni-td>
					<uni-td align="center" style="height: 45px;">{{item.idcard}}</uni-td>
					<uni-td style="display: flex;flex-direction: row;align-items: center; height: 45px;" >
						<uni-button size="mini" type="primary">修改</uni-button>
						<uni-button size="mini" type="warn">删除</uni-button>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		
		<uni-pagination class="uni-page" title="标题文字" show-icon="true" total= 15 current="0" pageSize=15></uni-pagination>
	</view>
</template>

<script>
	export default {
		name:"admin",
		data() {
			return {
				tabList:[
					{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				},
				{
					name:"张珊珊",
					depart:"财务部",
					work:"员工",
					username:"测试",
					phone:"15169757463",
					idcard:"370828194012101453",
					name:"张珊珊",
				}],
				 dataSize:10
			};
		}
	}
</script>

<style>
	@import './admin.css';
</style>
