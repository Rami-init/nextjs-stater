import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: '.vitest/setup.ts'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@/components": path.resolve(__dirname, './src/components'),
      "@/lib": path.resolve(__dirname, './src/lib'),
    },
  },
})
