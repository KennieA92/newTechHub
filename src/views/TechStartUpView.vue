<template>
    <div class="start-ups">
        <SliderComponent />
        <StartUpInfoComponent />
        <StartUpSectionComponent />
        <SignUpComponent />

    </div>
</template>

<script>
import SliderComponent from '@/components/StartUp/SliderComponent.vue'
import StartUpSectionComponent from '@/components/StartUp/StartUpSectionComponent.vue'
import StartUpInfoComponent from '../components/StartUp/StartUpInfoComponent.vue'
import SignUpComponent from '../components/StartUp/SignUpComponent.vue'
export default {
    components: {
        SliderComponent,
        StartUpSectionComponent,
        StartUpInfoComponent,
        SignUpComponent
    }
}
</script>

<style lang="scss" scoped>
.start-ups {
    padding-top: 80px;
    background: linear-gradient(to bottom,
            $primary-color,
            40%,
            $secondary-color 100%);
}
</style>