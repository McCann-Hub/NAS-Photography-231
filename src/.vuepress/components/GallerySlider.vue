<template>
  <carousel :items="images" v-slot="{ display, mode }">
    <slide-transition :direction="transitionName(mode)">
      <img
        v-if="display"
        :key="display.name"
        :alt="display.name"
        :src="display.src"
        class="max-h-full"
      />
    </slide-transition>
  </carousel>
</template>

<script>
import Gallery from "@mixins/gallery.js";
import GallerySlider from "@mixins/gallerySlider.js";

export default {
  name: "GallerySlider",
  mixins: [Gallery, GallerySlider],
};
</script>

<style lang="stylus" scoped>
.carousel {
  height: calc(var(--main-height) - 5.25rem);
}
</style>
