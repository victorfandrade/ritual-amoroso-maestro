import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for core React dependencies
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'vendor';
          }
          // UI chunk for Radix and shadcn components
          if (id.includes('node_modules/@radix-ui')) {
            return 'ui';
          }
          // Query chunk for data fetching
          if (id.includes('node_modules/@tanstack')) {
            return 'query';
          }
        },
      },
    },
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Generate source maps for debugging in production
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },
}));
