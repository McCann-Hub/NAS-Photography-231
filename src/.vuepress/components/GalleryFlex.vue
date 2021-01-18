<template>
  <div id="gallery" class="flex flex-wrap justify-center items-center">
    <img
      v-for="image in images"
      :key="image.name"
      :alt="image.name"
      :src="image.src"
      class="rounded m-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/7"
    />
  </div>
</template>

<script>
import Gallery from "@mixins/gallery.js";

export default {
  name: "GalleryFlex",
  mixins: [Gallery],
};
</script>
