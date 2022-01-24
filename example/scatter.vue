<template>
	<ScatterChart chartId="chart-ra" ref="chartScatter" :data="chartData"/>
</template>

<script lang="ts">
import {ScatterChart} from "../src/index";
export default {
	components:{
		ScatterChart
	},
	data(){
		return {
			chartData:{
				datasets: [{
					label: 'Scatter Dataset',
					data: [{
					x: -10,
					y: 0
					}, {
					x: 0,
					y: 10
					}, {
					x: 10,
					y: 5
					}, {
					x: 0.5,
					y: 5.5
					}],
					backgroundColor: 'rgb(255, 99, 132)'
				}]
			}
		}
	}
};
</script>