<template>
  <carousel :items="images" v-slot="{ display, mode }">
    <slide-transition :direction="transitionName(mode)">
      <nav-link v-if="display" :link="display.link" :key="display.name">
        <img
          :alt="display.name"
          :title="display.summary"
          :src="display.src"
          class="max-h-full"
        />
      </nav-link>
    </slide-transition>
  </carousel>
</template>

<script>
import Gallery from "@mixins/gallery.js";
import GallerySlider from "@mixins/gallerySlider.js";

export default {
  name: "GalleryNavSlider",
  mixins: [Gallery, GallerySlider],
  props: {
    navImages: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.images.splice(0, this.images.length, ...this.navImages);
  },
};
</script>

<style lang="stylus" scoped>
.carousel, .carousel a {
  height: calc(var(--main-height) - 1.25rem);
}
</style>
