import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['test/*.test.js'],
    testTimeout: 60_000,
    hookTimeout: 140_000
  },
  resolve: {
    alias: {
      'nuxt-speedkit': path.resolve(__dirname, './lib')
    }
  }
});
