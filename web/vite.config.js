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
        }),
    ],
    resolve: {
        alias: {
            crypto: 'crypto',
        },
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            plugins: [nodePolyfills()],
            input: path.resolve(__dirname, 'public/index.html'),
        },
    },
    base: '/', // Ensure correct base path for production
    server: {
        port: 8000, // Dev server port
    },
});