import createChart from "./chart";

const LineChart=createChart("line-chart","line");
const BarChart=createChart("bar-chart","bar");
const PieChart = createChart('pie-chart', 'pie');
const DoughnutChart=createChart("doughnut-chart","doughnut");
const PolarAreaChart = createChart('polar-chart', 'polarArea');
const RadarChart = createChart('radar-chart', 'radar');
const BubbleChart = createChart('bubble-chart', 'bubble');
const ScatterChart = createChart('scatter-chart', 'scatter');
const MixedChart=createChart("mixed-chart","mixed");

export {	
	LineChart,
	PieChart,
	DoughnutChart,
	PolarAreaChart,
	RadarChart,
	BubbleChart,
	ScatterChart,
	MixedChart,
	BarChart
}

export default {
	LineChart,
	PieChart,
	DoughnutChart,
	PolarAreaChart,
	RadarChart,
	BubbleChart,
	ScatterChart,
	MixedChart,
	BarChart
};