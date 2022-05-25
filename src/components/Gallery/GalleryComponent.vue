<template>
    <GalleryModalWindow v-if="showModal" @close="toggleModal" />
    <div class="col-md-4 col-12 p-2">
        <div @click="toggleModal" class="">
            <img :src="require('@/assets/StartUp/Image3.png')" class="card-img-top" alt="..." />
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import GalleryModalWindow from "./GalleryModalWindow.vue";
export default {
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
    max-height: 30vh;
}
</style>
