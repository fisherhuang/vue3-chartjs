<template>
	<button @click="fullscreen">{{isFullScreen?"退出全屏":"全屏显示"}}</button>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
export default{
	props:{
		targetRef:{
			required:true,
			type:Object
		}
	},
	setup(props,{attrs,emit}){

		const fObj=reactive({
			// target:props.targetRef,
			isFullScreen:false
		});

		const _props=reactive(props);

		const fullscreen=(evt)=>{
			console.log(fObj,_props)
			if(!document.fullscreenElement)
			{
				//@ts-ignore
				// _props.targetRef.value?.requestFullscreen();
				emit("fullscreen",(test)=>{console.log("test")});
				fObj.isFullScreen=true;
			}
			else{
				document.exitFullscreen();
				fObj.isFullScreen=false;
			}
		};

		const _fojb=toRefs(fObj);

		return {
			..._fojb,
			fullscreen
		}

	}
}
</script>