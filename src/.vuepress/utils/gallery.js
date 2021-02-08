export const galleryContext = require.context(
  '@galleries',
  true,
  /(\.png)|(\.jpe?g)$/i,
  'lazy'
);

export function directoryImages(directory) {
  return galleryContext.keys().filter((k) => k.startsWith(`./${directory}`));
}
