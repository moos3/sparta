// web/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    plugins: [
        viteCommonjs(),
        react(),
    ],
    resolve: {
        alias: {
            crypto: 'crypto-browserify',
            stream: 'stream-browserify',
            buffer: 'buffer',
            util: 'util',
            path: 'path-browserify',
            fs: 'browserify-fs',
            process: 'process/browser'
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: false, // Minification disabled for easier debugging
        rollupOptions: {
            plugins: [
                nodeResolve({
                    browser: true,
                    preferBuiltins: false
                }),
                nodePolyfills({
                    include: [
                        'node_modules/**/*.js',
                        'node_modules/vite/**/*.js',
                        'web/src/proto/*.js',
                    ],
                }),
                commonjs({
                    include: 'node_modules/**',
                    requireReturnsDefault: 'namespace',
                    transformMixedEsModules: true,
                }),
                NodeGlobalsPolyfillPlugin({
                    crypto: true,
                    buffer: true,
                    process: true,
                }),
            ],
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('@mui')) { // Keep @mui in its own chunk
                            return 'vendor_mui';
                        }
                        if (id.includes('google-protobuf') || id.includes('grpc-web')) { // Keep grpc-related in their own chunk
                            return 'vendor_grpc_protobuf';
                        }
                        // Generic vendor chunk for other node_modules, including react/react-dom if not specifically chunked above
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'vendor_react';
                        }
                        return 'vendor';
                    }
                }
            }
        },
        target: 'esnext',
    },
    // server: {
    //     port: 5173,
    //     proxy: {
    //         '/service': {
    //             target: 'http://localhost:8080',
    //             changeOrigin: true,
    //             rewrite: (path) => path,
    //         },
    //     },
    // },
    // Exclude react and react-dom from Vite's dependency optimization
    optimizeDeps: {
        include: ['grpc-web', 'google-protobuf'], // Keep these explicitly included
    },
});