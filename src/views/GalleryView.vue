<template>
  <div class="gallery">
    <div class="row">
      <div class="col-12 py-5 container">
        <h1>Gallery</h1>
        <p>Some of the pictures of ours past events :</p>
      </div>
    </div>
    <div class="row">
      <div class="d-flex col-12 justify-content-center">
        <div class="main-container col-12 d-flex flex-wrap">
          <GalleryComponent @click="toggleModal" v-for="image in images" :key="image.id" :image="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryComponent from "@/components/Gallery/GalleryComponent.vue";
import { getImages } from "@/firebase.js";

export default {
  components: { GalleryComponent },
  setup() {
    const images = getImages();

    return { images };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  overflow-x: hidden;
  padding-top: 160px;
  background: linear-gradient(to bottom,
      $primary-color,
      20%,
      $secondary-color 100%);

  .main-container {
    padding: 20px;
  }
}
</style>