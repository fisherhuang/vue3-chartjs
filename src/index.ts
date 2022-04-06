import createChart from "./chart";

export const LineChart=createChart("line-chart","line");
export const BarChart=createChart("bar-chart","bar");
export const PieChart = createChart('pie-chart', 'pie');
export const DoughnutChart=createChart("doughnut-chart","doughnut");
export const PolarAreaChart = createChart('polar-chart', 'polarArea');
export const RadarChart = createChart('radar-chart', 'radar');
export const BubbleChart = createChart('bubble-chart', 'bubble');
export const ScatterChart = createChart('scatter-chart', 'scatter');
export const MixedChart=createChart("mixed-chart","mixed");
export const DynamicTypeChart=createChart("dynamic-type","dynamic");


export default {
	LineChart,
	PieChart,
	DoughnutChart,
	PolarAreaChart,
	RadarChart,
	BubbleChart,
	ScatterChart,
	MixedChart,
	BarChart,
	DynamicTypeChart
};