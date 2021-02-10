<template>
  <div
    class="carousel relative flex justify-center items-center overflow-hidden bg-opacity-0 dark:bg-opacity-0"
  >
    <slot :display="display" :mode="mode"></slot>
    <div class="left-0" @click="previous">&#x276E;</div>
    <div class="right-0" @click="next">&#x276F;</div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
      items: {
          type: Array,
          required: true
      },
  },
  data: () => ({
    displayIndex: 0,
    mode: "next"
  }),
  computed: {
    display() {
      return this.items[this.displayIndex];
    },
  },
  methods: {
    next() {
      this.mode = "next";
      this.displayIndex = (this.displayIndex + 1) % this.items.length;
    },
    previous() {
      this.mode = "previous";
      this.displayIndex =
        (this.displayIndex - 1 + this.items.length) % this.items.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
.carousel div {
  @apply: absolute top-0 text-5xl px-4 min-h-full flex items-center select-none cursor-pointer bg-gray-400 bg-opacity-50;
}
</style>