<template>
  <carousel v-bind="$attrs" v-slot="{ display, mode }">
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
export default {
  name: "GalleryNavSlider",
  methods: {
    transitionName(mode) {
      return mode === "next" ? "left" : "right";
    },
  },
};
</script>

<style lang="stylus" scoped>
.carousel, .carousel a {
  height: calc(var(--main-height) - 4.5rem);
}
</style>
