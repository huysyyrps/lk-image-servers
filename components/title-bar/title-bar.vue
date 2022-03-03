<template>
	<view class="v-bar">
		<text class="tv-left">{{leftData}}</text>
		<text class="tv-content"></text>
		<text class="tv-right" v-if="rightData.length!=0" @click="left">{{rightData}}</text>
	</view>
</template>

<script>
	export default {
		name:"title-bar",
		props:{
			leftData:{
				type:String
			},
			rightData:{
				type:String
			},
		},
		methods:{
			left(){
				this.$emit("moreClick")
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.v-bar{
		background-color: #55557f;
		height: 50px;
		display: flex;
		flex-direction: row;
	}
	
	.tv-left{
		height: 25px;
		width: 200px;
		margin-top: 13px;
		text-align: left;
		color: white;
		display: flex;
		margin-left: 10px;
		align-items: flex-start;
		font-size: 17px;
	}
	
	.tv-content{
		height: 25px;
		margin-top: 13px;
		text-align: center;
		color: white;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		font-size: 17px;
	}
	
	.tv-right{
		height: 25px;
		width: 60px;
		margin-top: 13px;
		background-color: #007AFF;
		text-align: center;
		color: white;
		margin-right: 15px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
	}

</style>
