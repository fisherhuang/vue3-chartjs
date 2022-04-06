var W=Object.defineProperty,Z=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var O=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,A=(t,e)=>{for(var r in e||(e={}))z.call(e,r)&&O(t,r,e[r]);if(M)for(var r of M(e))Q.call(e,r)&&O(t,r,e[r]);return t},R=(t,e)=>Z(t,K(e));import{r as S,t as T,o as p,c as L,a as k,b as E,d as P,e as c,f as X,g as F,C as j,h as x,i as J,j as N,k as I,l as s,m as _,w as f,n as u,p as tt,v as et,q as at}from"./vendor.879b22d1.js";const rt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}};rt();var b=(t,e)=>{const r=t.__vccOpts||t;for(const[o,a]of e)r[o]=a;return r};const ot={props:{targetRef:{required:!0,type:Object}},setup(t,{attrs:e,emit:r}){const o=S({isFullScreen:!1}),a=S(t),l=d=>{console.log(o,a),document.fullscreenElement?(document.exitFullscreen(),o.isFullScreen=!1):(r("fullscreen",i=>{console.log("test")}),o.isFullScreen=!0)},n=T(o);return R(A({},n),{fullscreen:l})}};function nt(t,e,r,o,a,l){return p(),L("button",{onClick:e[0]||(e[0]=(...n)=>o.fullscreen&&o.fullscreen(...n))},k(t.isFullScreen?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F\u663E\u793A"),1)}var lt=b(ot,[["render",nt]]);const ct={inheritAttrs:!1,components:{FullScreenEl:lt},props:{class:{type:String,default:""},title:{type:String,default:""}},setup(t,{expose:e,attrs:r,slots:o,emit:a}){const l=S(t),n=E("panel");return R(A({},l),{panelRef:n})}},st={ref:"panelRef",class:"shadow overflow-hidden border-b border-gray-50 sm:rounded-lg h-full w-full"},ut={class:"bg-gray-50 px-6 py-3 after:clear-both after:block"},it={class:"float-left"},dt={class:"float-right"},ht={class:"bg-white-50 px-6 py-3"};function pt(t,e,r,o,a,l){return p(),L("div",st,[P(t.$slots,"panel-title",{},()=>[c("div",ut,[c("span",it,[P(t.$slots,"panel-title",{},()=>[X(k(r.title),1)])]),c("span",dt,[P(t.$slots,"actionbar")])])]),c("div",ht,[P(t.$slots,"default")])],512)}var w=b(ct,[["render",pt]]);const{Chart:V,ArcElement:ft,LineElement:bt,BarElement:_t,PointElement:Ct,BarController:gt,BubbleController:mt,DoughnutController:yt,LineController:$t,PieController:vt,PolarAreaController:Ft,RadarController:Dt,ScatterController:St,CategoryScale:Bt,LinearScale:Et,LogarithmicScale:At,RadialLinearScale:Pt,TimeScale:xt,TimeSeriesScale:Rt,Decimation:Lt,Filler:wt,Legend:Mt,Title:Ot,Tooltip:Tt,SubTitle:kt}=j;V.register(ft,bt,_t,Ct,gt,mt,yt,$t,vt,Ft,Dt,St,Bt,Et,At,Pt,xt,Rt,Lt,wt,Mt,Ot,Tt,kt);var C=(t,e)=>F({name:t,inheritAttrs:!1,props:{chartId:{default:t,type:String},type:{default:null,type:String},options:{default:{},type:Object},data:{type:Object,default:{},required:!0},width:{default:400,type:Number},height:{default:400,type:Number}},render(){return x("canvas",{ref:"chartRef"},[x("span","browser not support canvas")])},setup(r,{expose:o}){let a=S({});const l=r.options,n=E({}),d=r.data;J(function(){var D;const h=n.value.getContext("2d");if(!h){console.error("canvas created failed, please check browser support canvas or not");return}let y=e||"line";e==="mixed"?y=(D=d==null?void 0:d.datasets[0])==null?void 0:D.type:e==="dynamic"&&(y=r.type,r.type||console.warn("chart type is empty")),(d.datasets||[]).map(m=>(m.data=Array.from(m.data),m));const v=A({},N(d));a=new V(h,{type:y,options:l,data:v})});const i=()=>a,B=h=>{h==null||h(a),a==null||a.update()},$=()=>{a==null||a.destroy()};return I(()=>{$()}),o({getInstance:i,update:B,destroy:$}),{chartRef:n}}});const jt=C("line-chart","line"),Jt=C("bar-chart","bar"),Nt=C("pie-chart","pie"),It=C("doughnut-chart","doughnut"),Vt=C("polar-chart","polarArea"),qt=C("radar-chart","radar"),Ht=C("bubble-chart","bubble"),Yt=C("scatter-chart","scatter"),Gt=C("mixed-chart","mixed"),Ut=C("dynamic-type","dynamic"),Wt={components:{"bubble-chart":Ht},data(){return{chartData:{datasets:[{label:"First Dataset",data:[{x:20,y:30,r:15},{x:40,y:10,r:10},{x:5,y:10,r:8}],backgroundColor:"rgb(255, 99, 132)"}]}}}};function Zt(t,e,r,o,a,l){const n=s("bubble-chart");return p(),_(n,{chartId:"chart3",ref:"chartRef3",data:a.chartData},null,8,["data"])}var Kt=b(Wt,[["render",Zt]]);const zt={components:{ScatterChart:Yt},data(){return{chartData:{datasets:[{label:"Scatter Dataset",data:[{x:-10,y:0},{x:0,y:10},{x:10,y:5},{x:.5,y:5.5}],backgroundColor:"rgb(255, 99, 132)"}]}}}};function Qt(t,e,r,o,a,l){const n=s("ScatterChart");return p(),_(n,{chartId:"chart-ra",ref:"chartScatter",data:a.chartData},null,8,["data"])}var Xt=b(zt,[["render",Qt]]);const te={inheritAttributes:!0,components:{LineChart:jt,Panel:w},data(){return{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]}}},setup(){const t=E({});return{addData:()=>{t.value.update(l=>{l.data.datasets[0].data.push(15),l.data.labels.push("autumn")})},lineChartRef:t,random:()=>{},showSourceCode:()=>{}}}};function ee(t,e,r,o,a,l){const n=s("LineChart"),d=s("Panel");return p(),_(d,{title:"\u6298\u7EBF\u56FE\uFF08Line Chart\uFF09"},{actionbar:f(()=>[c("button",{onClick:e[0]||(e[0]=i=>o.addData()),class:"mr-1 border-gray-50 text-cool-gray-50 border-separate"},"add data")]),default:f(()=>[u(n,{chartId:"chart1",ref:"lineChartRef",data:a.chartData},null,8,["data"])]),_:1})}var ae=b(te,[["render",ee]]);const re={inheritAttributes:!0,components:{BarChart:Jt},data(){return{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]},chartOptions:{scales:{y:{beginAtZero:!0}}}}}};function oe(t,e,r,o,a,l){const n=s("BarChart");return p(),_(n,{chartId:"chart1",ref:"lineChartRef",data:a.chartData,options:a.chartOptions},null,8,["data","options"])}var ne=b(re,[["render",oe]]);const le=F({components:{RadarChart:qt},data(){return{chartData:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First Dataset",data:[65,59,90,81,56,55,40],fill:!0,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",pointBackgroundColor:"rgb(255, 99, 132)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"},{label:"My Second Dataset",data:[28,48,40,19,96,27,100],fill:!0,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",pointBackgroundColor:"rgb(54, 162, 235)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(54, 162, 235)"}]},chartOptions:{elements:{line:{borderWidth:3}}}}}});function ce(t,e,r,o,a,l){const n=s("RadarChart");return p(),_(n,{ref:"radarRef",data:t.chartData,options:t.chartOptions},null,8,["data","options"])}var se=b(le,[["render",ce]]);const ue=F({components:{DoughnutChart:It},data(){return{chartData:{labels:["Red","Blue","Yellow"],datasets:[{label:"My First Dataset",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}}});function ie(t,e,r,o,a,l){const n=s("DoughnutChart");return p(),_(n,{data:t.chartData},null,8,["data"])}var de=b(ue,[["render",ie]]);const he=F({components:{PieChart:Nt},data(){return{chartData:{labels:["Red","Blue","Yellow"],datasets:[{label:"My First Dataset",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}}});function pe(t,e,r,o,a,l){const n=s("PieChart");return p(),_(n,{data:t.chartData},null,8,["data"])}var fe=b(he,[["render",pe]]);const be=F({data(){return{chartData:{labels:["Red","Green","Yellow","Grey","Blue"],datasets:[{label:"My First Dataset",data:[11,16,7,3,14],backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"]}]}}},components:{PolarAreaChart:Vt}});function _e(t,e,r,o,a,l){const n=s("PolarAreaChart");return p(),_(n,{data:t.chartData},null,8,["data"])}var Ce=b(be,[["render",_e]]);const ge=F({data(){return{chartData:{labels:["January","February","March","April"],datasets:[{type:"bar",label:"Bar Dataset",data:[10,20,30,40],borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.2)"},{type:"line",label:"Line Dataset",data:[50,50,50,50],fill:!1,borderColor:"rgb(54, 162, 235)"}]},chartOptions:{scales:{y:{beginAtZero:!0}}}}},components:{MixedChart:Gt}});function me(t,e,r,o,a,l){const n=s("MixedChart");return p(),_(n,{data:t.chartData,options:t.chartOptions},null,8,["data","options"])}var ye=b(ge,[["render",me]]);const $e={components:{"bubble-chart":Ut,"v-panel":w},data(){return{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]},chartType:null}},setup(){const t=E({});return{changeType:function(r){console.log(arguments,r.target.value,t.value),t.value.update(o=>{console.log(o),o.config.type=r.target.value})},dChart:t}}},ve=c("option",{value:"line"},"\u6298\u7EBF\u56FE\uFF08LineChart\uFF09",-1),Fe=c("option",{value:"bubble"},"\u6CE1\u6CE1\u56FE\uFF08BubbleChart\uFF09",-1),De=c("option",{value:"scatter"},"\u6563\u88C5\u56FE\uFF08ScatterChart\uFF09",-1),Se=c("option",{value:"doughnut"},"\u73AF\u72B6\u56FE\uFF08DoughnutChart\uFF09",-1),Be=c("option",{value:"pie"},"\u997C\u56FE\uFF08PieChart\uFF09",-1),Ee=c("option",{value:"radar"},"\u96F7\u8FBE\u56FE\uFF08RadarChart\uFF09",-1),Ae=c("option",{value:"bar"},"\u67F1\u72B6\u56FE\uFF08BarChart\uFF09",-1),Pe=[ve,Fe,De,Se,Be,Ee,Ae];function xe(t,e,r,o,a,l){const n=s("bubble-chart"),d=s("v-panel");return p(),_(d,{title:"\u52A8\u6001\u7C7B\u578B(Dynamic Type chart)",add:"addData"},{actionbar:f(()=>[tt(c("select",{onChange:e[0]||(e[0]=(...i)=>o.changeType&&o.changeType(...i)),"onUpdate:modelValue":e[1]||(e[1]=i=>a.chartType=i)},Pe,544),[[et,a.chartType]])]),default:f(()=>[u(n,{type:"line",chartId:"dChart",ref:"dChart",data:a.chartData},null,8,["data"])]),_:1})}var Re=b($e,[["render",xe]]),Le=Object.defineProperty,q=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,H=(t,e,r)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Oe=(t,e)=>{for(var r in e||(e={}))we.call(e,r)&&H(t,r,e[r]);if(q)for(var r of q(e))Me.call(e,r)&&H(t,r,e[r]);return t};const{Chart:Y,ArcElement:Te,LineElement:ke,BarElement:je,PointElement:Je,BarController:Ne,BubbleController:Ie,DoughnutController:Ve,LineController:qe,PieController:He,PolarAreaController:Ye,RadarController:Ge,ScatterController:Ue,CategoryScale:We,LinearScale:Ze,LogarithmicScale:Ke,RadialLinearScale:ze,TimeScale:Qe,TimeSeriesScale:Xe,Decimation:ta,Filler:ea,Legend:aa,Title:ra,Tooltip:oa,SubTitle:na}=j;Y.register(Te,ke,je,Je,Ne,Ie,Ve,qe,He,Ye,Ge,Ue,We,Ze,Ke,ze,Qe,Xe,ta,ea,aa,ra,oa,na);var g=(t,e)=>F({name:t,inheritAttrs:!1,props:{chartId:{default:t,type:String},type:{default:null,type:String},options:{default:{},type:Object},data:{type:Object,default:{},required:!0},width:{default:400,type:Number},height:{default:400,type:Number}},render(){return x("canvas",{ref:"chartRef"},[x("span","browser not support canvas")])},setup(r,{expose:o}){let a=S({});const l=r.options,n=E({}),d=r.data;J(function(){var h;const y=n.value.getContext("2d");if(!y){console.error("canvas created failed, please check browser support canvas or not");return}let v=e||"line";e==="mixed"?v=(h=d==null?void 0:d.datasets[0])==null?void 0:h.type:e==="dynamic"&&(v=r.type,r.type||console.warn("chart type is empty")),(d.datasets||[]).map(m=>(m.data=Array.from(m.data),m));const D=Oe({},N(d));a=new Y(y,{type:v,options:l,data:D})});const i=()=>a,B=h=>{h==null||h(a),a==null||a.update()},$=()=>{a==null||a.destroy()};return I(()=>{$()}),o({getInstance:i,update:B,destroy:$}),{chartRef:n}}});const la=g("line-chart","line"),G=g("bar-chart","bar"),ca=g("pie-chart","pie"),sa=g("doughnut-chart","doughnut"),ua=g("polar-chart","polarArea"),ia=g("radar-chart","radar"),da=g("bubble-chart","bubble"),ha=g("scatter-chart","scatter"),pa=g("mixed-chart","mixed"),fa=g("dynamic-type","dynamic");var ba={LineChart:la,PieChart:ca,DoughnutChart:sa,PolarAreaChart:ua,RadarChart:ia,BubbleChart:da,ScatterChart:ha,MixedChart:pa,BarChart:G,DynamicTypeChart:fa};console.log(ba,G,"__chart___");const _a={components:{LineChart:ae,BarChart:ne,PieChart:fe,DoughnutChart:de,PolarAreaChart:Ce,RadarChart:se,BubbleChart:Kt,ScatterChart:Xt,MixedChart:ye,"v-panel":w,DynamicTypeChart:Re},setup(){const t=S({chartScatter:"chartRef-ra",lineChartRef:"line-chart"}),e=T(t);return{addData:function(){var o;(o=e.lineChartRef)==null||o.value}}}},Ca={class:"p-10"},ga={class:"grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"};function ma(t,e,r,o,a,l){const n=s("LineChart"),d=s("BarChart"),i=s("v-panel"),B=s("RadarChart"),$=s("PieChart"),h=s("DoughnutChart"),y=s("PolarAreaChart"),v=s("BubbleChart"),D=s("ScatterChart"),m=s("MixedChart"),U=s("dynamic-type-chart");return p(),L("div",Ca,[c("div",ga,[c("div",null,[u(n)]),c("div",null,[u(i,{title:"\u67F1\u72B6\u56FE\uFF08bar chart\uFF09"},{actionbar:f(()=>[]),default:f(()=>[u(d)]),_:1})]),c("div",null,[u(i,{title:"\u96F7\u8FBE\u56FE(radar chart)"},{default:f(()=>[u(B)]),_:1})]),c("div",null,[u(i,{title:"\u997C\u56FE(pie chart)"},{default:f(()=>[u($)]),_:1})]),c("div",null,[u(i,{title:"\u73AF\u72B6\u56FE(doughnut chart)"},{default:f(()=>[u(h)]),_:1})]),c("div",null,[u(i,{title:"\u6781\u9762\u533A\u57DF\u56FE(PolarArea Chart)"},{default:f(()=>[u(y)]),_:1})]),c("div",null,[u(i,{title:"\u6CE1\u6CE1\u56FE(bubble chart)"},{default:f(()=>[u(v)]),_:1})]),c("div",null,[u(i,{title:"\u6563\u72B6\u56FE(Scatter chart)"},{default:f(()=>[u(D)]),_:1})]),c("div",null,[u(i,{title:"\u6DF7\u5408\u56FE(Mixed chart)",add:"addData"},{default:f(()=>[u(m)]),_:1})]),c("div",null,[u(U)])])])}var ya=b(_a,[["render",ma]]);const $a=at(ya);$a.mount("#root");