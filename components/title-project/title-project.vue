<template>
	<view class="v-common">
		<view class="v-content">
			<view class="v-data">
				<view class="v-num" style="background-color: #1890FF;">
					<text class="tv">图片:</text>
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
					<text class="tv">图片:</text>
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
					<text class="tv">图片:</text>
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
					<text class="tv">图片:</text>
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
					<text class="tv">图片:</text>
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
			<ring-chart-item class="test1"></ring-chart-item>

			<uni-table class="u-table" border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th class="u-th-project" align="center">项目</uni-th>
					<uni-th class="u-th-name" align="center">地址</uni-th>
					<uni-th class="u-th-line" align="left">路径</uni-th>
					<uni-th class="u-th-line" align="left">设置</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr v-for="item in tabList">
					<uni-td>{{item.project}}</uni-td>
					<uni-td>{{item.address}}</uni-td>
					<uni-td>{{item.line}}</uni-td>
					<uni-td style="display: flex;flex-direction: row;" >
						<uni-button size="mini" type="primary">修改</uni-button>
						<uni-button size="mini" type="warn">删除</uni-button>
					</uni-td>

				</uni-tr>
			</uni-table>
		</view>

		<view class="v-line"></view>

	</view>
	</view>
</template>

<script>
	export default {
		name: "title-project",
		data() {
			return {
				tabList:[{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				},
				{
					project:"测试地址1",
					address:"测试项目地址",
					line:"data/line/text/image1"
				}]
			};
		}
	}
</script>

<style>
	.v-common {
		height: 95vh;
		display: flex;
		flex-direction: column;
	}

	.v-line {
		background-color: #C8C7CC;
		margin-top: 20px;
		height: 2px;
	}

	.v-content {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		width: 100%;
		margin-top: 20px;
		margin-left: 20px;
	}

	.v-data {
		width: 25%;
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
		height: 50%;
		margin-left: 90px;
	}

	.test1 {
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
</style>
