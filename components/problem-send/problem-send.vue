<template>
	<view class="c-comment">
		<view style="display: flex;flex-direction: column;height: 50%;">
			<text style="margin-top: 10px;">问题反馈</text>
			<textarea placeholder="请输入反馈信息"></textarea>
			<button>确认提交</button>
			
			<text style="margin-top: 30px;">反馈记录</text>
		</view>
		<view class="v-table" style="display: flex;flex-direction: row;height: 50%;">
			<uni-table class="u-table" border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th class="u-th-project" align="center">编号</uni-th>
					<uni-th class="u-th-name" align="center">时间</uni-th>
					<uni-th class="u-th-line" align="center">内容</uni-th>
					<uni-th class="u-th-line" align="center">状态</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr v-for="(item,index) in tabList" :key="index">
					<uni-td align="center">{{item.project}}</uni-td>
					<uni-td align="center">{{item.address}}</uni-td>
					<uni-td>{{item.line}}</uni-td>
					<uni-td align="center" style="color: #007AFF;" v-if="item.stateTag"> 已解决</uni-td>
					<uni-td align="center" style="color: #E43D33;" v-else>未解决</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "problem-send",
		data() {
			return {
				tabList: [{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:false,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:true,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:true,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:false,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:true,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:true,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:true
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:true,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:false,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:false,
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1",
						stateTag:false,
					}
				]
			};
		}
	}
</script>

<style>
	.c-comment{
		display: flex;
		flex-direction: column;
		margin: 0 5px;
	}
	text{
		height: 45px;
		line-height: 45px;
		justify-content: center;
		align-items: center;
		background-color: #F0F0F0;
		text-align: center;
		color: white;
		padding-left: 20px;
		color: black;
		font-size: 18px;
		border-radius: 10px;
	}
	textarea{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 25%;
		min-height: 200px;
		margin-top: 10px;
		padding-left: 10px;
		border: #8F8F94 1px solid;
		border-radius: 10px;
	}
	
	button{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 45px;
		margin: 10px auto;
		background-color: #007AFF;
		color: white;
		border: #8F8F94 1px solid;
		border-radius: 10px;
	}
	
	.u-table {
		display: flex;
		flex-direction: row;
		height: 450px;
	}
	
	.u-th-project {
		width: 10%;
	}
	
	.u-th-name {
		width: 10%;
	}
	
	.u-th-line {
		width: 70%;
	}
	
	.u-th-but {
		width: 10%;
	}
</style>
