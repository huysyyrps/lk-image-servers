<template>
	<view class = "v-common">
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
			
			<view class="v-data" >
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
			
			<view class="v-data" >
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
			
			<view class="v-data" >
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
	
		<view class = "v-line"></view>
		
		<view class="v-table">
			<ring-chart-item class="test1"></ring-chart-item>
		</view>
		
		<!-- <view style="width: 500px;height: 500px; background-color: #007AFF;"> -->
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"title-project",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	
.v-common{
	height: 95vh;
	display: flex;
	flex-direction: column;
}

.v-line{
	background-color: #C8C7CC;
	margin-top: 20px;
	height: 2px;
}
	
.v-content{
	display: flex;
	flex-direction: row;
	background-color: #FFFFFF;
	width: 100%;
	margin-top: 20px;
	margin-left: 20px;
}

.v-data{
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: row;
	background-color: #FFFFFF;
	justify-content: center;
}

.v-num{
	width: 100px;
	height: 100px;
	display: flex;
	flex-direction: column;
	border-radius: 60px;
	background-color: #1AAD19;
}

.tv{
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-size: 14px;
}

.tv-num{
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-weight: bold;
}

.v-name{
	height: 100px;
	display: flex;
	text-align: left;
	flex-direction: column;
	margin-left: 20px;
}
.tv-name{
	height: 50px;
	display: flex;
	align-items: center;
	text-align: left;
	color: #FFFFFF;
	font-size: 14px;
}

.v-table{
	display: flex;
	width: 100%;
	height: 50%;
	margin-left: 90px;
}

.test1{
	display: flex;
	flex-direction: row;
	width: 40%;
	min-height: 400px;
	align-items: center;
	border-right: 2px solid #C8C7CC;
}
</style>
