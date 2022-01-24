import * as ChartJS from 'chart.js';

import {h,onMounted,onBeforeUnmount, reactive,ref,  toRaw,defineComponent} from "vue";

const {Chart,
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
}=ChartJS;

Chart.register(
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
	SubTitle);
	
export default (chartId:string,chartType)=>defineComponent({
	name:chartId,
	inheritAttrs:false,
	props:{
		chartId:{
			default:chartId,
			type:String
		},
		type:{
			default:null,
			type:String
		},
		options:{
			default:{},
			type:Object
		},
		data:{
			type:Object,
			default:{},
			required:true
		},
		width:{
			default:400,
			type:Number
		},
		height:{
			default:400,
			type:Number
		}
	},
	render(){
		return h("canvas",
		{
			ref:"chartRef"
		},[h("span","browser not support canvas")])
	},
	setup(props,{expose}){
		let _chartInstance=reactive({});

		const _options=props.options;
		const _ref=ref({} as HTMLCanvasElement);
		const _data=props.data;

		onMounted(function(){

			const context=_ref.value.getContext("2d");

			if(!context)
			{
				console.error("canvas created failed, please check browser support canvas or not")
				return;
			}

			let _chartType= chartType|| "line";

			if(chartType==="mixed")
			{
				_chartType= _data?.datasets[0]?.type;
			}
			else if(chartType==="dynamic"){
				_chartType=props.type;
				if(!props.type)
					console.warn("chart type is empty");
			}

			(_data.datasets||[]).map(element => {
				element.data=Array.from(element.data);
				return element;
			});

			const _d={...toRaw(_data)};

			_chartInstance=new Chart(context,{
				type:_chartType,
				options:_options,
				//@ts-ignore
				data: _d
			});
		});

		const getInstance=():any=>{
			return _chartInstance;
		}

		const update=(cb)=>{
			cb?.(_chartInstance);

			//@ts-ignore
			_chartInstance?.update();
		}

		const destroy=()=>{
			//@ts-ignore
			_chartInstance?.destroy();
		}

		onBeforeUnmount(()=>{
			destroy();
		});

		expose({
			getInstance,
			update,
			destroy
		});
		


		return {
			chartRef:_ref
		};
	}
});
