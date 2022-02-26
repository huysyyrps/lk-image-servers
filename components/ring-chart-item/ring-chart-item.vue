<template>
	<view class="charts-box">
		<qiun-data-charts class="pie" type="pie" :chartData="chartsDataPie1" />
	</view>
</template>

<script>
	export default {
		name: 'Index',
		onLoad() {
			uni.showToast({
				thtile:this.chartsDataPie1
			})
		},
		data() {
			return {

				chartsDataPie1: {
					series: [{
						"data": [{
							"name": "一班",
							"value": 1234
						}, {
							"name": "二班",
							"value": 1235
						}, {
							"name": "三班",
							"value": 1236
						}, {
							"name": "四班",
							"value": 1237
						}, {
							"name": "五班",
							"value": 1238
						}]
					}]
				},
			};
		},
		methods: {},
	};
</script>

<style scoped>
	.arcbar {
		display: flex;
	}
</style>
