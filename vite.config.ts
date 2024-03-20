import KumaUI from '@kuma-ui/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite({ routesDirectory: './src/features' }), KumaUI()],
	build: {
		cssMinify: 'lightningcss',
		rollupOptions: {
			input: 'index.html',
		},
	},
})
