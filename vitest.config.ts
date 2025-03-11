import path from 'pathe';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: process.env.BASE_URL || '/',
  test: {
    include: ['test/**/*.test.ts'],
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
