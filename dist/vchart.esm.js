var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import * as ChartJS from "chart.js";
import { defineComponent, h, reactive, ref, onMounted, toRaw, onBeforeUnmount } from "vue";
const {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} = ChartJS;
Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle);
var createChart = (chartId, chartType) => defineComponent({
  name: chartId,
  inheritAttrs: false,
  props: {
    chartId: {
      default: chartId,
      type: String
    },
    type: {
      default: null,
      type: String
    },
    options: {
      default: {},
      type: Object
    },
    data: {
      type: Object,
      default: {},
      required: true
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    }
  },
  render() {
    return h("canvas", {
      ref: "chartRef"
    }, [h("span", "browser not support canvas")]);
  },
  setup(props, { expose }) {
    let _chartInstance = reactive({});
    const _options = props.options;
    const _ref = ref({});
    const _data = props.data;
    onMounted(function() {
      var _a;
      const context = _ref.value.getContext("2d");
      if (!context) {
        console.error("canvas created failed, please check browser support canvas or not");
        return;
      }
      let _chartType = chartType || "line";
      if (chartType === "mixed") {
        _chartType = (_a = _data == null ? void 0 : _data.datasets[0]) == null ? void 0 : _a.type;
      } else if (chartType === "dynamic") {
        _chartType = props.type;
        if (!props.type)
          console.warn("chart type is empty");
      }
      (_data.datasets || []).map((element) => {
        element.data = Array.from(element.data);
        return element;
      });
      const _d = __spreadValues({}, toRaw(_data));
      _chartInstance = new Chart(context, {
        type: _chartType,
        options: _options,
        data: _d
      });
    });
    const getInstance = () => {
      return _chartInstance;
    };
    const update = (cb) => {
      cb == null ? void 0 : cb(_chartInstance);
      _chartInstance == null ? void 0 : _chartInstance.update();
    };
    const destroy = () => {
      _chartInstance == null ? void 0 : _chartInstance.destroy();
    };
    onBeforeUnmount(() => {
      destroy();
    });
    expose({
      getInstance,
      update,
      destroy
    });
    return {
      chartRef: _ref
    };
  }
});
const LineChart = createChart("line-chart", "line");
const BarChart = createChart("bar-chart", "bar");
const PieChart = createChart("pie-chart", "pie");
const DoughnutChart = createChart("doughnut-chart", "doughnut");
const PolarAreaChart = createChart("polar-chart", "polarArea");
const RadarChart = createChart("radar-chart", "radar");
const BubbleChart = createChart("bubble-chart", "bubble");
const ScatterChart = createChart("scatter-chart", "scatter");
const MixedChart = createChart("mixed-chart", "mixed");
const DynamicTypeChart = createChart("dynamic-type", "dynamic");
var index = {
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
export { BarChart, BubbleChart, DoughnutChart, DynamicTypeChart, LineChart, MixedChart, PieChart, PolarAreaChart, RadarChart, ScatterChart, index as default };
