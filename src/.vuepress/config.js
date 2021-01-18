const path = require('path');

module.exports = {
  dest: './dist',
  title: 'NAS Photography 231',
  description: 'A Vuepress powered blog',
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
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