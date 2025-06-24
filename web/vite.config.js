import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import path from 'path';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    plugins: [
        react(),
        NodeGlobalsPolyfillPlugin({
            crypto: true,
            buffer: true,
        }),
    ],
    resolve: {
        alias: {
            crypto: 'crypto',
            buffer: 'buffer',
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            plugins: [nodePolyfills()],
            input: path.resolve(__dirname, 'index.html'),
        },
        target: 'esnext', // Ensure ES module output
    },
    base: '/',
    server: {
        port: 5173,
    },
});