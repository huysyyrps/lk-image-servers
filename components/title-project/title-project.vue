<template>
	<view class="v-common">
		<!-- <view class="v-more">
			<text class="tv-more1"></text>
			<text class="tv-more" type="primary" @click="moreData">更多</text>
		</view> -->
		<view class="v-content">
			<view class="v-data">
				<view class="v-num" style="background-color: #1890FF;">
					<text class="tv">
						<slot name="tag1"></slot>
					</text>
					<text class="tv-num">
						<slot name="num1"></slot>
					</text>
				</view>
				<view class="v-name">
					<text class="tv-name" style="color: #000000;">项目名称:</text>
					<text class="tv-num" style="color: #000000;">
						<slot name="project1"></slot>
					</text>
				</view>
			</view>

			<view class="v-data">
				<view class="v-num" style="background-color: #91CB74;">
					<text class="tv">
						<slot name="tag2"></slot>
					</text>
					<text class="tv-num">
						<slot name="num2"></slot>
					</text>
				</view>
				<view class="v-name">
					<text class="tv-name" style="color: #000000;">项目名称:</text>
					<text class="tv-num" style="color: #000000;">
						<slot name="project2"></slot>
					</text>
				</view>
			</view>

			<view class="v-data">
				<view class="v-num" style="background-color: #FAC858;">
					<text class="tv">
						<slot name="tag3"></slot>
					</text>
					<text class="tv-num">
						<slot name="num3"></slot>
					</text>
				</view>
				<view class="v-name">
					<text class="tv-name" style="color: #000000;">项目名称:</text>
					<text class="tv-num" style="color: #000000;">
						<slot name="project3"></slot>
					</text>
				</view>
			</view>

			<view class="v-data">
				<view class="v-num" style="background-color: #EE6666;">
					<text class="tv">
						<slot name="tag4"></slot>
					</text>
					<text class="tv-num">
						<slot name="num4"></slot>
					</text>
				</view>
				<view class="v-name">
					<text class="tv-name" style="color: #000000;">项目名称:</text>
					<text class="tv-num" style="color: #000000;">
						<slot name="project4"></slot>
					</text>
				</view>
			</view>

			<view class="v-data">
				<view class="v-num" style="background-color: #73C0DE;">
					<text class="tv">
						<slot name="tag5"></slot>
					</text>
					<text class="tv-num">
						<slot name="num5"></slot>
					</text>
				</view>
				<view class="v-name">
					<text class="tv-name" style="color: #000000;">项目名称:</text>
					<text class="tv-num" style="color: #000000;">
						<slot name="project5"></slot>
					</text>
				</view>
			</view>
		</view>
		<view class="v-line"></view>

		<view class="v-table">
			<ring-chart-item class="r-chart"></ring-chart-item>

			<uni-table class="u-table" border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th class="u-th-project" align="center">项目</uni-th>
					<uni-th class="u-th-name" align="center">地址</uni-th>
					<uni-th class="u-th-line" align="left">路径</uni-th>
					<uni-th class="u-th-line" align="left">设置</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr v-for="(item,index) in tabList" :key="index">
					<uni-td>{{item.project}}</uni-td>
					<uni-td>{{item.address}}</uni-td>
					<uni-td>{{item.line}}</uni-td>
					<uni-td style="display: flex;flex-direction: row;">
						<uni-button size="mini" type="primary">修改</uni-button>
						<uni-button size="mini" type="warn">删除</uni-button>
					</uni-td>

				</uni-tr>
			</uni-table>
		</view>
		<view class="v-line"></view>

		<view class="v-card">
			<card class="c-card" color1="#1890FF"></card>
			<card class="c-card" color1="#91CB74"></card>
			<card class="c-card" color1="#FAC858"></card>
			<card class="c-card" color1="#EE6666"></card>
			<card class="c-card" color1="#73C0DE"></card>
		</view>

	</view>
	</view>
</template>

<script>
	export default {
		name: "title-project",
		data() {
			return {
				tabList: [{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					},
					{
						project: "测试地址1",
						address: "测试项目地址",
						line: "data/line/text/image1"
					}
				]
			};
		},
		methods: {
			moreData() {
				this.$emit('moreClick')
			}
		}
	}
</script>

<style>
	/* .v-more {
		width: 100%;
		height: 30px;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
	}

	.tv-more1 {
		width: 150px;
		height: 30px;
		flex: 1;
		line-height: 30px;
		background-color: #FFFFFF;
	}

	.tv-more {
		width: 60px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		margin-top: 2px;
		margin-right: 10px;
		background-color: #1890FF;
		color: white;
		font-size: 13px;
		border-radius: 5px;
	} */

	.v-common {
		height: 96vh;
		display: flex;
		flex-direction: column;
	}

	.v-content {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		width: 100%;
		margin-left: 20px;
		margin-top: 20px;
	}

	.v-line {
		background-color: #C8C7CC;
		margin-top: 20px;
		height: 1px;
	}

	.v-data {
		width: 23%;
		height: 100%;
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		justify-content: center;
	}

	.v-num {
		width: 100px;
		height: 100px;
		display: flex;
		flex-direction: column;
		border-radius: 60px;
		background-color: #1AAD19;
	}

	.tv {
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 14px;
	}

	.tv-num {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-weight: bold;
	}

	.v-name {
		height: 100px;
		display: flex;
		text-align: left;
		flex-direction: column;
		margin-left: 20px;
	}

	.tv-name {
		height: 50px;
		display: flex;
		align-items: center;
		text-align: left;
		color: #FFFFFF;
		font-size: 14px;
	}

	.v-table {
		display: flex;
		width: 100%;
		height: 55%;
		margin-left: 90px;
	}

	.r-chart {
		display: flex;
		flex-direction: row;
		width: 40%;
		min-height: 400px;
		align-items: center;
	}

	.u-table {
		width: 80%;
		margin-left: 20px;
		margin-right: 100px;
		margin-top: 1px;
	}

	.u-th-project {
		width: 20%;
		margin-left: 40px;
	}

	.u-th-name {
		width: 30%;
	}

	.u-th-line {
		width: 25%;
	}

	.u-th-but {
		display: flex;
		flex-direction: row;
	}

	.v-card {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		width: 98%;
		height: 20%;
		margin: 20px;
	}

	.c-card {
		margin: auto 20px;
		height: 100%;
		width: 30%;
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		justify-content: center;
		border-radius: 10px;
	}
</style>
