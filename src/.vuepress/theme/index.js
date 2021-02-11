const path = require('path');
const fs = require('fs');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

module.exports = (themeConfig, { siteConfig }) => {
  const { base } = siteConfig;

  const imagesDirectory = path.resolve(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(imagesDirectory)) {
    fs.mkdirSync(imagesDirectory);
  }

  return {
    extend: require.resolve('../../../theme'),
    extendPageData(pageCtx) {
      const directoryRegEx = /<gallery[\w-]+\s+[\s\w-="]*directory="(?<directory>[\w-]+)"[\s\w-="]*\/>/gi;
      const foundDirectory = directoryRegEx.exec(
        pageCtx._strippedContent || ''
      );
      if (foundDirectory) {
        const directory = foundDirectory.groups.directory;
        pageCtx.title = pageCtx.title || directory;
        if (!pageCtx.frontmatter.image) {
          const localDirectory = path.resolve(
            __dirname,
            '..',
            'assets',
            'galleries',
            directory
          );
          const images = fs.readdirSync(localDirectory);
          const image = images[getRandomIntInclusive(0, images.length - 1)];
          const publicDirectory = path.resolve(imagesDirectory, directory);
          if (fs.existsSync(publicDirectory)) {
            fs.rmdirSync(publicDirectory, { recursive: true, force: true });
          }
          fs.mkdirSync(publicDirectory);
          fs.copyFileSync(
            path.resolve(localDirectory, image),
            path.resolve(publicDirectory, image)
          );
          pageCtx.frontmatter.image = `${base}images/${directory}/${image}`;
        }
      }
    },
  };
};
