<template>
    <div class="main-container d-flex col-11 col-sm-12 col-md-6 col-lg-5 px-4 flex-column justify-content-center">
        <div class="quote-container d-flex justify-content-between">
            <i class="fa fa-quote-left col-1" aria-hidden="true"></i>
            <i class="fa fa-quote-right col-1" aria-hidden="true"></i>
        </div>
        <p class="testimonial-text d-flex col-12">{{ message }}</p>
        <h2><span> - {{ name }}</span></h2>
        <p class="testimonial-title">{{ title }}</p>
        <p class="testimonial-title">{{ company }}</p>
        <p class="testimonial-title" v-if="website">{{ website }}</p>

    </div>
</template>

<script>

export default {
    props: {
        name: String,
        title: String,
        company: String,
        website: String,
        message: String,


    }
}
</script>

<style lang="scss" scoped>
.main-container {
    min-height: 40vh;
    padding: 10px;
    background: rgba($quaternary-color, 0.05);
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