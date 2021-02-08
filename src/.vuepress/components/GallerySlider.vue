<template>
  <div
    id="gallery"
    class="relative flex justify-center items-center overflow-hidden"
  >
    <transition v-if="directory" :name="transitionName">
      <img
        v-if="display"
        :key="display.name"
        :alt="display.name"
        :src="display.src"
        class="max-h-full"
      />
    </transition>
    <transition v-else :name="transitionName">
      <nav-link v-if="display" :link="display.link" :key="display.name">
        <img
          :alt="display.name"
          :title="display.summary"
          :src="display.src"
          class="max-h-full"
        />
      </nav-link>
    </transition>
    <div class="left-0" @click="previous">&#x276E;</div>
    <div class="right-0" @click="next">&#x276F;</div>
  </div>
</template>

<script>
import Gallery from "@mixins/gallery.js";
import NavLink from "../../../theme/global-components/NavLink.vue";

export default {
  components: { NavLink },
  name: "GallerySlider",
  mixins: [Gallery],
  data: () => ({
    displayIndex: 0,
    transitionName: "slide-left",
  }),
  computed: {
    display() {
      return this.images[this.displayIndex];
    },
  },
  methods: {
    next() {
      this.transitionName = "slide-left";
      this.displayIndex = (this.displayIndex + 1) % this.images.length;
    },
    previous() {
      this.transitionName = "slide-right";
      this.displayIndex =
        (this.displayIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
#gallery, #gallery a {
  height: calc(var(--main-height) - 4.5rem);
}

#gallery div {
  @apply: absolute top-0 text-5xl px-4 min-h-full flex items-center select-none cursor-pointer bg-gray-400 bg-opacity-50;
}

.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  @apply: absolute transition-all ease-in-out duration-1000 transform translate-x-0;
}

.slide-left-enter, .slide-right-leave-to {
  @apply: translate-x-full opacity-0;
}

.slide-left-leave-to, .slide-right-enter {
  @apply: -translate-x-full opacity-0;
}
</style>
