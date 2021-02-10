<template>
  <div
    class="carousel relative flex justify-center items-center overflow-hidden"
  >
    <slot :display="display" :mode="mode"></slot>
    <div class="left-0" @click="previous">&#x276E;</div>
    <div class="right-0" @click="next">&#x276F;</div>
  </div>
</template>

<script>
import Gallery from "@mixins/gallery.js";

export default {
  name: "Carousel",
  mixins: [Gallery],
  data: () => ({
    displayIndex: 0,
    mode: "next"
  }),
  computed: {
    display() {
      return this.images[this.displayIndex];
    },
  },
  methods: {
    next() {
      this.mode = "next";
      this.displayIndex = (this.displayIndex + 1) % this.images.length;
    },
    previous() {
      this.mode = "previous";
      this.displayIndex =
        (this.displayIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
.carousel div {
  @apply: absolute top-0 text-5xl px-4 min-h-full flex items-center select-none cursor-pointer bg-gray-400 bg-opacity-50;
}
</style>