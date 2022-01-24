<template>
	<v-panel title="动态类型(Dynamic Type chart)" add="addData">
		<bubble-chart type="line"  chartId="dChart" ref="dChart" :data="chartData"/>
		<template #actionbar>
			<select @change="changeType" v-model="chartType">
				<option value="line">折线图（LineChart）</option>
				<option value="bubble">泡泡图（BubbleChart）</option>
				<option value="scatter">散装图（ScatterChart）</option>
				<option value="doughnut">环状图（DoughnutChart）</option>
				<option value="pie">饼图（PieChart）</option>
				<option value="radar">雷达图（RadarChart）</option>
				<option value="bar">柱状图（BarChart）</option>
			</select>
		</template>
	</v-panel>
</template>
<script lang="ts">
import {DynamicTypeChart} from "../src/index";
import Panel from "./panel.vue";
import {ref} from "vue";

export default {
	components:{
		"bubble-chart":DynamicTypeChart,
		"v-panel":Panel
	},
	data(){
		return{
			chartData:{
				labels: ["January","February","March","April","May","June","July"],
				datasets: [{
					label: 'My First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}]
			},
			chartType:null
		}
	},
	setup(){
		
		const dChart=ref({} as any);

		const changeType=function(event){
			console.log(arguments,event.target.value,dChart.value);
			dChart.value.update((instance)=>{
				console.log(instance);
				instance.config.type=event.target.value;
			})
			
		};

		return{
			changeType,
			dChart
		}
	}
}
</script>