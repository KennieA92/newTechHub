<template>
    <section id="testimonials-section">
        <h1>What people say?</h1>
        <div class="main-container container-fluid d-flex flex-wrap justify-content-center ">
            <div class="testimonial-container container-fluid d-flex flex-wrap justify-content-center col-11 col-md-8">
                <TestimonialComponent v-for=" testimonial in testimonials" :key="testimonial.id"
                    :name="testimonial.name" :title="testimonial.title" :website="testimonial.website"
                    :company="testimonial.company" :message="testimonial.message" />
            </div>
        </div>
    </section>
</template>

<script>
import { useLoadTestimonials } from '@/firebase.js'
import TestimonialComponent from './TestimonialComponent.vue'
export default {
    setup() {
        const testimonials = useLoadTestimonials();
        return { testimonials };
    },
    components: { TestimonialComponent }
}
</script>

<style lang="scss" scoped>
#testimonials-section {
    margin-top: 5vh;
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