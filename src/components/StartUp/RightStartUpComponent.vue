<template>
    <div class="main-container d-flex col-12 col-md-12 justify-content-end">
        <div class="content-container col-12 col-md-10 d-flex flex-row align-items-center">
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
    background: $primary-color;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    margin: 0.5vh 0;
    height: 17vh;

    p {
        position: absolute;
        font-size: 1.5rem;
        right: 25%;
        margin: 0;
    }

    img {
        height: 10vh;
    }

    @media only screen and (max-width: 600px) {
        height: 20vh;

        p {
            font-size: 16px;
        }

        img {
            height: 15vh;
        }
    }
}
</style>