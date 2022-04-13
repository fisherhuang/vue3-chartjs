## 支持 Vue 的最低版本 V3.2.26

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
- DynamicTypeChart

## 属性（props）

- options
- chartId
- data

`<LineChart options="*" chartId="chartRef" data="*"/>`

`const addData=()=>{ const _el=lineChartRef.value; _el.update((instance)=>{ instance.data.datasets[0].data.push(15) instance.data.labels.push("autumn") }) }; `

## 暴露的实例方法（expose instance methods）

- getInstance
- update
- destroy

### 销毁 chart(Destroy the chart instance)

`const destroyChart=()=>{ const _el=lineChartRef.value; _el.destroy(); }; `

### 获取图表实例(get chart instance)

`()=>{ const _el=lineChartRef.value; const instance=_el.getInstance(); instance... }; `

## [awesome chartjs](https://github.com/chartjs/awesome#charts)
## [demo](https://fisherhuang.github.io/vue3-chartjs)
