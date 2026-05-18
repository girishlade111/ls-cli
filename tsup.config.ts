import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  target: 'node18',
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  banner: { js: '#!/usr/bin/env node' },
  external: ['react', 'ink'],
  treeshake: true
});