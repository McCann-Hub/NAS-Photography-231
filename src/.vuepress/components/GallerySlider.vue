<template>
  <div id="gallery" class="min-h-full relative flex justify-center overflow-hidden">
    <div class="left-0" @click="previous">&#x276E;</div>
    <transition :name="transitionName">
      <img
        :key="display.name"
        :alt="display.name"
        :src="display.src"
        class="max-h-screen rounded"
      />
    </transition>
    <div class="right-0" @click="next">&#x276F;</div>
  </div>
</template>

<script>
import Gallery from "@mixins/gallery.js";

export default {
  name: "GallerySlider",
  mixins: [Gallery],
  data: () => ({
    displayIndex: 0,
    transitionName: 'slide-left'
  }),
  computed: {
    display() {
      return this.images[this.displayIndex];
    },
  },
  methods: {
    next() {
      this.transitionName = "slide-left"
      this.displayIndex = (this.displayIndex + 1) % this.images.length;
    },
    previous() {
      this.transitionName = "slide-right"
      this.displayIndex =
        (this.displayIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
#gallery div {
  @apply: absolute top-0 text-5xl px-4 min-h-full flex items-center select-none cursor-pointer bg-gray-400 bg-opacity-50;
}

.slide-left-enter-active, 
.slide-left-leave-active,
.slide-right-enter-active, 
.slide-right-leave-active {
  @apply: absolute transition-all ease-in-out duration-1000 transform translate-x-0;
}
.slide-left-enter,
.slide-right-leave-to {
  @apply: translate-x-full opacity-0;
} 
.slide-left-leave-to,
.slide-right-enter {
  @apply: -translate-x-full opacity-0;
}
</style>
