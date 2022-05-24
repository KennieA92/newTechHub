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
}
</style>