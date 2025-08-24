import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Use existing Tailwind config and styles
      configFile: './tailwind.config.ts',
    }),
  ],
  vite: {
    // Preserve existing Vite configuration
    define: {
      global: 'globalThis',
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    css: {
      // Zorg ervoor dat CSS classes behouden blijven
      preprocessorOptions: {
        css: {
          charset: false
        }
      },
      postcss: {
        plugins: []
      }
    }
  },
  // View transitions are now stable in Astro 5
  // Optimize for performance
  output: 'static'
});
