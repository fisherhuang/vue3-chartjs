<template>
	<bubble-chart  chartId="chart3" ref="chartRef3" :data="chartData"/>
</template>
<script lang="ts">
import {BubbleChart} from "../src/index";

export default {
	components:{
		"bubble-chart":BubbleChart
	},
	data(){
		return{
			chartData:{
				datasets: [{
					label: 'First Dataset',
					data: [{
					x: 20,
					y: 30,
					r: 15
					}, {
					x: 40,
					y: 10,
					r: 10
					},{
						x:5,
						y:10,
						r:8
					}],
					backgroundColor: 'rgb(255, 99, 132)'
				}]
			}
		}
	}
}
</script>