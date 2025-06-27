// web/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import path from 'path'; // Ensure path is imported for resolve.alias

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
            process: 'process/browser',
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            '@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
            '@mui/system': path.resolve(__dirname, 'node_modules/@mui/system'),
            // REMOVED: '@mui/styled-engine': path.resolve(__dirname, 'node_modules/@emotion/react'), // Remove this line
            '@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
            '@emotion/styled': path.resolve(__dirname, 'node_modules/@emotion/styled'),
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: false,
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
                        if (id.includes('@mui')) {
                            return 'vendor_mui';
                        }
                        if (id.includes('google-protobuf') || id.includes('grpc-web')) {
                            return 'vendor_grpc_protobuf';
                        }
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
    server: {
        port: 5173,
        proxy: {
            '/service': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path,
            },
        },
    },
    optimizeDeps: {
        include: [
            'grpc-web',
            'google-protobuf',
            '@mui/material',
            '@mui/material/styles',
            '@mui/system',
            '@emotion/react',
            '@emotion/styled',
        ],
        force: true,
    },
});