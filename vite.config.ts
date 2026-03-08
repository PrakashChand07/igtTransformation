import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // ── Proxy: Zoho CRM API CORS bypass (dev only) ──────────────────────
  // Browser → /zoho-api/... → Vite Node server → https://www.zohoapis.in
  // Node has no CORS restriction, so this bypasses the browser-side block.
  server: {
    proxy: {
      '/zoho-api': {
        target: 'https://www.zohoapis.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zoho-api/, ''),
        secure: true,
      },
    },
  },
})
