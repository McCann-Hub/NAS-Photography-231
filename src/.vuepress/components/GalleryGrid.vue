<template>
  <div id="gallery" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-4 items-center">
    <img
      v-for="image in images"
      :key="image.name"
      :alt="image.name"
      :src="image.src"
      class="rounded"
    />
  </div>
</template>

<script>
import Gallery from "@mixins/gallery.js";

export default {
  name: "GalleryGrid",
  mixins: [Gallery],
};
</script>
