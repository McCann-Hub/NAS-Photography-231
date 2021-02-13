const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (options = {}, ctx) => {
  const { siteConfig } = ctx;

  const configureWebpack = {
    plugins: [
      new ImageminPlugin(
        Object.assign(
          {
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
              quality: [0.6, 0.8],
            },
          },
          options
        )
      ),
    ],
  };

  siteConfig.configureWebpack = Object.assign(
    siteConfig.configureWebpack || {},
    configureWebpack
  );

  return {
    name: 'imagemin',
  };
};
