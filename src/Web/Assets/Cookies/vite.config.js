import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
	// Check the mode explicitly
	const isProd = mode === 'production'

	return {
		build: {
			outDir: 'dist',

			// CRITICAL: Only empty outDir on production build.
			// Keeping this true during watch is what causes Terser to lock up.
			emptyOutDir: isProd,

			// Keeps Terser active for both build and watch modes
			minify: 'terser',

			terserOptions: {
				compress: {
					drop_console: isProd, // Only drop logs on production build
					drop_debugger: isProd,
				},
				format: {
					comments: !isProd, // Keep comments visible during watch mode
				},
			},
			lib: {
				entry: resolve(__dirname, 'src/cookies.js'),
				name: 'Cookies',
				fileName: () => 'cookies.js',
				formats: ['es'],
			},
			rollupOptions: {
				external: ['ckeditor5'],
			},
		},
		assetsInclude: ['**/*.svg'],
	}
})
