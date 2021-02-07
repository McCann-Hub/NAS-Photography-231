const path = require('path');

module.exports = {
  dest: './dist',
  base: process.env.NODE_ENV === 'production' ? '/NAS-Photography-231/' : '/',
  title: 'NAS Photography 231',
  description: 'A Vuepress powered blog',
  themeConfig: {
    domain: 'http://localhost',
    author: 'NAS Photography',
    logo: 'logo',
    dark: true,
    nav: [
      {
        text: 'Hello',
        link: '/'
      },
      {
        text: 'World',
        link: '/'
      },
      {
        text: 'Foo',
        items: [
          {
            text: 'Bar1',
            link: '/'
          },
          {
            text: 'Bar2',
            link: '/'
          },
        ],
      },
    ],
    social: [
      {
        icon: 'FacebookIcon',
        link: '/',
        text: 'Facebook',
      },
      {
        icon: 'Instagram',
        link: '/',
        text: 'Instagram',
      },
      {
        icon: 'pinterest',
        link: '/',
        text: 'Pintrest',
      },
    ],
    sitemap: {
      hostname: 'http://localhost',
    },
    directories: [
      {
        id: 'gallery',
        dirname: 'galleries',
        path: '/gallery/',
        itemPermalink: '/gallery/:year/:month/:day/:slug',
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@galleries': path.resolve(__dirname, 'assets', 'galleries'),
        '@mixins': path.resolve(__dirname, 'mixins')
      },
    },
  },
};
