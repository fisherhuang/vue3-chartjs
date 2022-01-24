## 支持Vue的最低版本 V3.2.26

## 基于[Chartjs](https://www.chartjs.org/)

- LineChart
- PieChart
- DoughnutChart
- PolarAreaChart
- RadarChart
- BubbleChart
- ScatterChart
- MixedChart
- BarChart

## 属性（props）
- options
- chartId
- data

`<LineChart options="*" chartId="chartRef" data="*"/>`
`
const addData=()=>{
	const _el=lineChartRef.value;
	
	_el.update((instance)=>{
		instance.data.datasets[0].data.push(15)
		instance.data.labels.push("autumn")
	})
};
`

## 暴露的实例方法（expose instance methods）
- getInstance
- update
- destroy
