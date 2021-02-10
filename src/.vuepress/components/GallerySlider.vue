<template>
  <carousel v-bind="$attrs" v-slot="{ display, mode }">
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
export default {
  name: "GallerySlider",
  methods: {
    transitionName(mode) {
      return mode === "next" ? "left" : "right";
    }
  }
};
</script>

<style lang="stylus" scoped>
.carousel {
  height: calc(var(--main-height) - 4.5rem);
}
</style>
