<template>
	<view class="v-comment">
		<view class="v-retrieval">
			<input class="in-retrieval" placeholder="关键字检索" />
			<button class="btn-retrieval">检索</button>
			<button class="btn-add">添加</button>
			<button class="btn-delect">删除</button>
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
	.v-comment{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.v-retrieval{
		height: 50px;
		display: inline;
		margin: 5px 20px 0 20px;
		align-items: center;
	}
	
	.in-retrieval{
		margin: 10px auto;
		height: 30px;
		display: inline-block;
		border: #bcbcbc 1px solid;
		border-radius: 10px;
		font-size: 14px;
		padding-left: 10px;
	}
	button{
		display: inline-block;
		margin: 10px auto;
		margin-left:30px;
		height: 30px;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
		justify-content: center;
		align-items: center;
	}
	.btn-retrieval{
		background-color: #007AFF;
		color: white;
	}
	
	.btn-add{
		background-color: #91CB74;
		color: white;
	}
	.btn-delect{
		background-color: red;
		color: white;
	}

	.v-table{
		display: flex;
		flex-direction: row;
		height: 92%;
	}
	.uni-page{
		height: 40px;
	}
</style>
