<template>
	<DoughnutChart :data="chartData"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {DoughnutChart} from "../src/index";

export default defineComponent({
	components:{
		DoughnutChart
	},
	data(){
		return{
			chartData:{
				labels: [
					'Red',
					'Blue',
					'Yellow'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [300, 50, 100],
					backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)'
					],
					hoverOffset: 4
				}]
			}
		}
	}
})
</script>
