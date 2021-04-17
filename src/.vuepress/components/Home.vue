<template>
  <div id="home" class="flex flex-col justify-center">
    <gallery-nav-slider class="h-full" :nav-images="galleries" />
  </div>
</template>

<script>
import GallerySlider from "./GallerySlider.vue";
export default {
  components: { GallerySlider },
  name: "Home",
  computed: {
    galleries() {
      return this.$site.pages
        .filter((p) => p.id === "gallery")
        .map((g) => ({
          name: g.title,
          summary: g.frontmatter.description,
          src: g.frontmatter.image,
          link: g.path,
        }));
    },
  },
};
</script>

<style lang="stylus" scoped>
#home {
  min-height: var(--main-height);
}
</style>