import { defineConfig } from "vite";
import VuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
	css:{
		postcss:"./postcss.config"
	},
	resolve:{
		extensions:[".ts",".js"]
	},
	plugins:[
		VuePlugin()
	],
	server:{
		port:9900
	},
	build:{
		lib:{
			entry:"./src/index.ts",
			name:"vchart",
			fileName:(format)=>`vchart.${format}.js`
		},
		rollupOptions:{
			external: ['vue','chart.js'],
			globals:{
				vue:'Vue',
				chart:"ChartJs"
			}
		}
	}
})