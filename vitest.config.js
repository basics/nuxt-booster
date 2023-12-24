import path from 'pathe';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/*.test.js'],
    testTimeout: 60_000,
    hookTimeout: 140_000
  },
  resolve: {
    alias: {
      'nuxt-booster': path.resolve(__dirname, './src/runtime'),
      '#booster': path.resolve(__dirname, './src/runtime')
    }
  }
});
