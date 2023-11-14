const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // append the CopyPlugin to copy the file to your public dir
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/@foliojs-fork/fontkit/data.trie',
            to: 'server/vendor-chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/fontkit/use.trie',
            to: 'server/vendor-chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/fontkit/indic.trie',
            to: 'server/vendor-chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/linebreak/src/classes.trie',
            to: 'server/vendor-chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica.afm',
            to: 'server/vendor-chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica-Bold.afm',
            to: 'server/vendor-chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica-BoldOblique.afm',
            to: 'server/vendor-chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica-Oblique.afm',
            to: 'server/vendor-chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/fontkit/data.trie',
            to: 'server/chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/fontkit/use.trie',
            to: 'server/chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/fontkit/indic.trie',
            to: 'server/chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/linebreak/src/classes.trie',
            to: 'server/chunks',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica.afm',
            to: 'server/chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica-Bold.afm',
            to: 'server/chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica-BoldOblique.afm',
            to: 'server/chunks/data',
          },
          {
            from: 'node_modules/@foliojs-fork/pdfkit/js/data/Helvetica-Oblique.afm',
            to: 'server/chunks/data',
          },
        ],
      })
    );

    // Important: return the modified config
    return config;
  },
  experimental: {
    instrumentationHook: true,
    webpackBuildWorker: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
