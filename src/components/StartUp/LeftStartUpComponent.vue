<template>
    <div class="main-container d-flex col-12 col-md-12">
        <div class="content-container col-12 col-md-10 d-flex flex-row-reverse align-items-center">
            <p class="col-6">
                {{ contentText }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contentText: String,
        imgUrl: String
    },
}
</script>

<style lang="scss" scoped>
.content-container {
    background: $secondary-color;
    margin: 0.5vh 0;
    height: 150px;
    font-size: 1.5rem;

    border: 5px solid $quaternary-color;
    border-left: none;


    p {
        position: absolute;
        left: 25%;
        margin: 0;
    }

    @media only screen and (max-width: 600px) {
        height: 180px;
        font-size: 1rem;
    }
}
</style>