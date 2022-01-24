<template>
	<Panel title="折线图（Line Chart）">
		<template #actionbar>
			<button @click="addData()" class="mr-1 border-gray-50  text-cool-gray-50 border-separate">add data</button>
			<!-- <button @click="random()" class="mr-1 border-gray-50 border-separate">随机</button>
			<button @click="showSourceCode" class="mr-1 border-gray-50 border-separate">显示源码</button> -->
		</template>
		<LineChart chartId="chart1" ref="lineChartRef" :data="chartData"/>
	</Panel>
</template>
<script lang="ts">
import {ref} from "vue";
import {LineChart} from "../src/index";
import Panel from "./panel.vue";


export default {
	inheritAttributes:true,
	components:{
		LineChart,
		Panel
	},
	data(){
		return {
			chartData:{
				labels: ["January","February","March","April","May","June","July"],
				datasets: [{
					label: 'My First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}]
			}
		}	
	},
	setup(){
		const lineChartRef=ref({} as any);

		const addData=()=>{
			const _el=lineChartRef.value;
			
			_el.update((instance)=>{
				instance.data.datasets[0].data.push(15)
				instance.data.labels.push("autumn")
			})
		};

		const random=()=>{

		};

		const showSourceCode=()=>{

		}

		return{
			addData,
			lineChartRef,
			random,
			showSourceCode
		}
	}	
}
</script>