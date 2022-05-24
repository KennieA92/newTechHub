<template>
    <section id="testimonials-section">
        <h1>What people say?</h1>
        <div class="main-container container-fluid d-flex flex-wrap justify-content-center ">
            <div class="testimonial-container container-fluid d-flex flex-wrap justify-content-center col-11 col-md-8">

                <TestimonialComponent />
                <TestimonialComponent />

                <TestimonialComponent />
                <TestimonialComponent />


            </div>
            <!-- 
    V-for of all our testimonials using TestimonialComponent
        
 -->
            <!--<div class="main-container" v-for="techEvent in techEvents" :key="techEvent.id">
            <TestimonialComponent v-bind="techEvent" />
        </div>
        -->
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
    margin-bottom: 5vh;

    h1 {
        margin-top: 5vh;
        color: black;
    }

    .main-container {
        margin-top: 5vh;

        .testimonial-container {

            border: 1px solid $primary-color;
            padding-bottom: 5vh;

        }
    }
}
</style>