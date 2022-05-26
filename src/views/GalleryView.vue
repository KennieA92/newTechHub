<template>
    <div class="gallery d-flex col-12 justify-content-center">
        <div class="main-container col-10 d-flex flex-wrap ">
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
            <GalleryComponent @click="toggleModal" />
        </div>
    </div>
</template>

<script>
import GalleryComponent from '@/components/Gallery/GalleryComponent.vue';
export default {
    components: { GalleryComponent }
}
</script>

<style lang="scss" scoped>
.gallery {
    margin-top: 9vh;
    background: linear-gradient(to bottom,
            $tertiary-color,
            10%,
            $secondary-color 90%);

    .main-container {
        padding: 20px;

    }
}
</style>