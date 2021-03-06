import { defineConfig } from "vite";
import VuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
  css: {
    postcss: "./postcss.config",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [VuePlugin()],
  server: {
    port: 9900,
  },
  build: {
    outDir: "docs",

    rollupOptions: {
      entry: "./example/index.html",
      output: {},
    },
  },
});
