<template>
    <div class="main-container d-flex col-12 col-md-12">
        <div class="content-container col-12 col-md-10 d-flex flex-row-reverse align-items-center">
            <img class="col-3 col-sm-2 col-md-1" :src="resolve_img_url(imgUrl)" alt="">
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
    setup() {
        const resolve_img_url = (imgUrl) => {
            return require('@/assets/' + imgUrl + '.svg')
        }
        return {
            resolve_img_url
        }

    }
}
</script>

<style lang="scss" scoped>
.content-container {
    background: $secondary-color;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    margin: 2vh 0;
    height: 15vh;

    p {
        position: absolute;
        left: 25%;
        margin: 0;
    }

    img {
        height: 10vh;
    }

    @media only screen and (max-width: 600px) {
        height: 20vh;
    }
}
</style>