<template>
	<view>
		<ring-chart :dataAs="pieData" ref="ringChart0" canvasId="index_ring_1" :titleAs="{
				title: {
					name: '一年级'
				},
				subtitle: {
					name: '70%'
				}
			}" />
	</view>
</template>

<script>
	import RingChart from '@/components/stan-ucharts/RingChart.vue';
	export default {
		name: "ring-chart",
		data() {
			return {
				pieData: {
					//饼状图数据
					series: [{
							name: '一班',
							data: 50
						},
						{
							name: '二班',
							data: 30
						},
						{
							name: '三班',
							data: 20
						},
						{
							name: '四班',
							data: 18
						},
						{
							name: '五班',
							data: 8
						}
					]
				}
			};
		},
		methods: {
			created() {
				this.$nextTick(() => {
					// 环状图
					this.$refs['ringChart0'].showCharts();
				});
				//ajax调用
				this.getServerData();
			}
		}
</script>

<style>

</style>
