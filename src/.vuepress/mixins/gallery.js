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
  computed: {
    galleryContext() {
      return require.context('@galleries/test', true, /(\.png)|(\.jpe?g)$/i);
    },
  },
  created() {
    this.galleryContext.keys().forEach((imageFilePath) => {
      this.images.push({
        name: imageFilePath
          .split('/')
          .pop()
          .split('.')[0],
        src: this.galleryContext(imageFilePath),
      });
    });
  },
};
