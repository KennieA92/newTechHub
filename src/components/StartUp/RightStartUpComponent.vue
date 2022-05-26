<template>
    <div class="main-container d-flex col-12 col-md-12 justify-content-end">
        <div class="content-container col-12 col-md-10 d-flex flex-row align-items-center">
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
    }
}
</script>

<style lang="scss" scoped>
.content-container {
    background: $primary-color;
    margin: 0.5vh 0;
    height: 17vh;

    p {
        position: absolute;
        font-size: 1.5rem;
        right: 25%;
        margin: 0;
    }



    @media only screen and (max-width: 600px) {
        height: 20vh;

        p {
            font-size: 16px;
        }

    }
}
</style>