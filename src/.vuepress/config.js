const path = require('path');

module.exports = {
  dest: './dist',
  title: "Nate's Visuals",
  description: 'A Vuepress powered blog',
  themeConfig: {
    domain: 'https://natevisuals.com',
    author: 'Nate Smith',
    logo: 'logo',
    dark: true,
    nav: [
      {
        text: 'Galleries',
        link: '/gallery/',
      },
      {
        text: 'About',
        items: [
          {
            text: 'Me',
            link: '#',
          },
        ],
      },
    ],
    social: [
      {
        icon: 'FacebookIcon',
        link: '#',
      },
      {
        icon: 'Instagram',
        link: '#',
      },
      {
        icon: 'pinterest',
        link: '#',
      },
    ],
    blog: {
      directories: [
        {
          id: 'gallery',
          dirname: 'galleries',
          path: '/gallery/',
          itemPermalink: '/gallery/:year/:month/:day/:slug',
        },
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tag/',
        },
      ],
      sitemap: {
        hostname: 'https://natevisuals.com',
      },
    },
    bugUrl: 'https://github.com/McCann-Hub/NAS-Photography-231/issues',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@galleries': path.resolve(__dirname, 'assets', 'galleries'),
        '@mixins': path.resolve(__dirname, 'mixins'),
      },
    },
  },
};
