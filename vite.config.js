import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	build: {
	  // generate .vite/manifest.json in outDir
	  manifest: true,
	  rollupOptions: {
		// overwrite default .html entry
		input: '/index.html',
	  },
	},
  })