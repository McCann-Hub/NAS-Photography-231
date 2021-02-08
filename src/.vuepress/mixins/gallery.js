import { galleryContext, directoryImages } from '../utils/gallery.js';

export default {
  props: {
    directory: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    images: [],
  }),
  created() {
    directoryImages(this.directory).forEach((imageFilePath) => {
      galleryContext(imageFilePath).then((image) => {
        this.images.push({
          name: imageFilePath
            .split('/')
            .pop()
            .split('.')[0],
          src: image,
        });
      });
    });
  },
};
