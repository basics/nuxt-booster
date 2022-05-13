import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['test/*.test.js'],
    testTimeout: 60_000,
    hookTimeout: 140_000
  }
});
