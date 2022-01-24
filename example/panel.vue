<template>
	<div ref="panelRef" class="shadow overflow-hidden border-b border-gray-50 sm:rounded-lg h-full w-full">
		<slot name="panel-title">
			<div class="bg-gray-50 px-6 py-3  after:clear-both after:block">
				<span class="float-left">
					<slot name="panel-title">
						{{title}}
					</slot>
				</span>
				<span class="float-right" >
					<slot name="actionbar">
						<!-- <button @click="add" class="mr-1">add</button> -->
						<!-- <button @click="fullscreen">{{isFullScreen?"退出全屏":"全屏显示"}}</button> -->
						<!-- <FullScreenEl targetRef="panelRef" /> -->
					</slot>
				</span>
			</div>
		</slot>
		<div class="bg-white-50 px-6 py-3">
			<slot/>
		</div>
	</div>
</template>
<script lang="ts">
import { reactive,ref ,h} from 'vue';
import FullScreenEl from "./fullscreen.vue";
export default {
	inheritAttrs:false,
	components:{
		FullScreenEl
	},
	props:{
		class:{
			type:String,
			default:""
		},
		title:{
			type:String,
			default:""
		}
	},
	setup(props,{expose,attrs,slots,emit}){
		const _props=reactive(props);
		const panelRef=ref("panel");

		// console.log(slots.actionbar,"slots")

		return {
			..._props,
			panelRef
		}
	}
}
</script>