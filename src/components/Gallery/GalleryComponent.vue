<template>
  <GalleryModalWindow v-if="showModal" @close="toggleModal" />
  <div class="col-md-4 col-12 p-2">
    <div @click="toggleModal" class="">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/techhub-exam.appspot.com/o/53363-3.jpg?alt=media&token=427e285d-5479-4cc0-aba9-59fc9e36ffc0"
        class="card-img-top"
        alt="..."
      />
    </div>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import GalleryModalWindow from "./GalleryModalWindow.vue";
// import { useGalleryImage } from "@/firebase.js";
export default {
  components: { GalleryModalWindow },
  //   setup() {
  //     const img = useGalleryImage();
  //     console.log(img);
  //     const showModal = ref(false);
  //     const toggleModal = () => {
  //       showModal.value = !showModal.value;
  //     };
  //     return {
  //       showModal,
  //       toggleModal,
  //     };
  //   },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
  max-height: 30vh;
}
</style>
