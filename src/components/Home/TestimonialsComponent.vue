<template>
    <section id="testimonials-section">
        <h1>What people say?</h1>
        <div class="main-container container-fluid d-flex flex-wrap justify-content-center ">
            <!-- 
    V-for of all our testimonials using TestimonialComponent
        
 -->
            <!--<div class="main-container" v-for="techEvent in techEvents" :key="techEvent.id">
            <TestimonialComponent v-bind="techEvent" />
        </div>
        -->
            <TestimonialComponent />
            <TestimonialComponent />
        </div>
    </section>
</template>

<script>
import { useLoadTechEvents } from '@/firebase.js'
import TestimonialComponent from './TestimonialComponent.vue'
export default {
    setup() {
        const techEvents = useLoadTechEvents();
        return { techEvents };
    },
    components: { TestimonialComponent }
}
</script>

<style lang="scss" scoped>
#testimonials-section {
    min-height: 50vh;

    h1 {
        margin-top: 5vh;
        color: black;
    }

    .main-container {
        margin-top: 5vh;
    }
}
</style>