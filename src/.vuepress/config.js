const path = require('path');

module.exports = {
  dest: './dist',
  base: process.env.NODE_ENV === 'production' ? '/NAS-Photography-231/' : '/',
  title: 'NAS Photography 231',
  description: 'A Vuepress powered blog',
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@galleries': path.resolve(__dirname, 'assets', 'galleries'),
        '@mixins': path.resolve(__dirname, 'mixins')
      },
    },
  },
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
    ],
  },
};
