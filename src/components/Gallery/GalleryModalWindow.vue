<template>
    <div>
        <div class="block container" @click="$emit('close')">
            <img :src="require('@/assets/StartUp/Image3.png')" alt="Card image cap" />
        </div>
    </div>
</template>

<script>
export default {
    setup() { },
};
</script>

<style lang="scss" scoped>
.block {
    position: fixed;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        object-fit: contain;
        max-width: 100%;
        height: 80vh;
    }
}
</style>