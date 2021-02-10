<template>
  <transition :name="_direction">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "SlideTransition",
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  computed: {
    _direction() {
      return `slide-${this.direction}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
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