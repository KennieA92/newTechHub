<template>
    <div class="main-container d-flex col-11 col-sm-12 col-md-6 col-lg-5 px-4 flex-column justify-content-center">
        <div class="quote-container d-flex justify-content-between">
            <i class="fa fa-quote-left col-1" aria-hidden="true"></i>
            <i class="fa fa-quote-right col-1" aria-hidden="true"></i>
        </div>
        <p class="testimonial-text d-flex col-12">I owe the community a BIG thank you as the first event really
            kick-started my
            own
            business with a lot of contacts and positive inspiration. Have been really busy since we met at the
            Inspirational Talk #1 </p>
        <h2><span> - Thomas Andersen</span></h2>
        <p class="testimonial-title">Founder / CEO</p>
        <p class="testimonial-title">BitMind</p>

    </div>
</template>

<script>

export default {
    props: {
        techEvent: {
            type: Object
        }

    }
}
</script>

<style lang="scss" scoped>
.main-container {
    min-height: 40vh;
    color: black;
    border: 1px solid $primary-color;
    background: rgba($primary-color, 0.01);
    margin: 1vw;

    span {
        margin-top: 10px;
        font-weight: 700;
        display: flex;
        align-self: flex-start;
    }


    .testimonial-text {
        padding: 0 1vw;

        text-align: start;
    }

    .testimonial-title {
        font-style: italic;
        text-align: start;
        margin-bottom: 5px;
    }
}
</style>