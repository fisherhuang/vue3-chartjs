<template>
	<div class="p-10">
		<div class="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
			<div>
				<LineChart/>
			</div>
			<div>
				<v-panel title="柱状图（bar chart）">
					<template #actionbar>
						<!-- <button @click="addData()">add Data</button> -->
					</template>
					<BarChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="雷达图(radar chart)">
					<RadarChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="饼图(pie chart)">
					<PieChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="环状图(doughnut chart)">
					<DoughnutChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="极面区域图(PolarArea Chart)">
					<PolarAreaChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="泡泡图(bubble chart)">
					<BubbleChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="散状图(Scatter chart)">
					<ScatterChart/>
				</v-panel>
			</div>
			<div>
				<v-panel title="混合图(Mixed chart)" add="addData">
					<MixedChart/>
				</v-panel>
			</div>
			<div>
				<dynamic-type-chart/>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { reactive,  toRefs } from 'vue';
	import panel from "./panel.vue";
	import BubbleChart from "./bubble.vue";
	import ScatterChart from "./scatter.vue";
	import LineChart from "./line.vue";
	import BarChart from "./bar.vue";
	import RadarChart from "./radar.vue";
	import DoughnutChart from "./doughnut.vue";
	import PieChart from "./pie.vue";
	import PolarAreaChart from "./polararea.vue";
	import MixedChart from "./mixed.vue";
	import DynamicTypeChart from "./dynamicType.vue";

	export default {
			components:{
			LineChart,
			BarChart,
			PieChart,
			DoughnutChart,
			PolarAreaChart,
			RadarChart,
			BubbleChart,
			ScatterChart,
			MixedChart,
			'v-panel':panel,
			DynamicTypeChart
		},
		setup(){
			const chartRefs=reactive({
				chartScatter:"chartRef-ra",
				lineChartRef:"line-chart"
			});

			const _chartRefs=toRefs(chartRefs);

			//@ts-ignore
			const addData=function(){
				const _chart=_chartRefs.lineChartRef?.value;
			}

			return {
				addData
			};
		}
	};
</script>