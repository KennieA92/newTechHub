<template>
  <div class="gallery d-flex col-12 justify-content-center">
    <div class="main-container col-10 d-flex flex-wrap">
      <GalleryComponent
        @click="toggleModal"
        v-for="image in images"
        :key="image.id"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import GalleryComponent from "@/components/Gallery/GalleryComponent.vue";
import { useImages } from "@/firebase.js";

export default {
  components: { GalleryComponent },
  setup() {
    const images = useImages();
    console.log(images._rawValue);
    return { images };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: 80px;
  background: linear-gradient(
    to bottom,
    $tertiary-color,
    10%,
    $secondary-color 90%
  );

  .main-container {
    padding: 20px;
  }
}
</style>