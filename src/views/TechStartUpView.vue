<template>
    <div class="start-ups">
        <SliderComponent />
    </div>
</template>

<script>
import SliderComponent from '@/components/StartUp/SliderComponent.vue'
export default {
    components: {
        SliderComponent
    }
}
</script>

<style lang="scss" scoped>
.start-ups {
    margin-top: 10vh;
    height: 100vh;
    background: linear-gradient(to bottom,
            $primary-color,
            40%,
            $secondary-color 100%);
}
</style>