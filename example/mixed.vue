<template>
	<MixedChart :data="chartData" :options="chartOptions"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {MixedChart} from "../src/index";

export default defineComponent({
	data() {
		return{
			chartData:{
				labels: [
					'January',
					'February',
					'March',
					'April'
				],
				datasets: [{
					type: 'bar',
					label: 'Bar Dataset',
					data: [10, 20, 30, 40],
					borderColor: 'rgb(255, 99, 132)',
					backgroundColor: 'rgba(255, 99, 132, 0.2)'
				}, {
					type: 'line',
					label: 'Line Dataset',
					data: [50, 50, 50, 50],
					fill: false,
					borderColor: 'rgb(54, 162, 235)'
				}]
			},
			chartOptions:{
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		}
	},
	components:{
		MixedChart
	}
})
</script>
