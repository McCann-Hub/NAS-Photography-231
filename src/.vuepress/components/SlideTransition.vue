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
