import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Output to "build" (not Vite's default "dist") so the existing host's
  // deploy settings from the old Create React App site keep working.
  build: { outDir: 'build' },
})
