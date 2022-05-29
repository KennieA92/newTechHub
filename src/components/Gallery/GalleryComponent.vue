<template>
  <GalleryModalWindow v-if="showModal" @close="toggleModal" :image="image" />
  <div class="col-md-3 col-12 p-1">
    <div @click="toggleModal" class="">
      <img :src="image.url" alt="" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import GalleryModalWindow from "./GalleryModalWindow.vue";
export default {
  props: ["image"],
  components: { GalleryModalWindow },
  setup() {
    const showModal = ref(false);
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };
    return {
      showModal,
      toggleModal,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 300px;
  max-height: 30vh;
}

@media screen and (max-width: 768px) {
  img {
    width: 90%;
  }
}
</style>
