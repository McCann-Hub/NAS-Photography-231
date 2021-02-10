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

export default {
  name: "GallerySlider",
  mixins: [Gallery],
  methods: {
    transitionName(mode) {
      return mode === "next" ? "left" : "right";
    }
  }
};
</script>

<style lang="stylus" scoped>
.carousel {
  height: calc(var(--main-height) - 5.25rem);
}
</style>
