import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyStaticFoldersPlugin() {
  return {
    name: 'copy-static-folders',
    closeBundle() {
      const folders = ['Videos', 'images', 'Documents'];
      for (const folder of folders) {
        const src = path.resolve(folder);
        const dest = path.resolve('dist', folder);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
          console.log(`[vite] Copied ${folder} to dist/${folder}`);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticFoldersPlugin()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: false,
  },
});
