<template>
	<view>
		<view class="v-content" :style="{background: color1}">
			<view style="display: flex;flex-direction: row; width: 100%;">
				<view class="v-card" >
					<view class="v-data">
						<text>项目名称</text>
					</view>
					<view class="v-data">
						<text>检测日期: </text>
						<text>2020-02-25</text>
					</view>
					<view class="v-data">
						<text>项目地址: </text>
						<text>济宁市任城区接贾路</text>
					</view>
					<view class="v-data">
						<text>检测人员: </text>
						<text>李明、张三</text>
					</view>
					<view class="v-data">
						<text>检测设备: </text>
						<text>LK-254329S</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card",
		props:{
			color1:{
				type:String,
				default:"#1890FF"
			},
			color2:{
				type:String,
				default:"#1890FF"
			},
			color3:{
				type:String,
				default:"#1890FF"
			},
			color4:{
				type:String,
				default:"#1890FF"
			},
			color5:{
				type:String,
				default:"#1890FF"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.v-content{
		display: flex;
		flex-direction: column;
		width: 100%;
		border-radius: 10px;
	}
	.v-card{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.v-data{
		display: flex;
		flex-direction: row;
		margin: 7px 10px;
		color: #FFFFFF;
	}
	text{
		margin-left: 10px;
	}
</style>
