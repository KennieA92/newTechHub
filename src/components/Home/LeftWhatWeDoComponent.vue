<template>
    <div class="main-container d-flex col-12 col-md-12">
        <div class="content-container col-12 col-md-10 d-flex flex-sm-row-reverse flex-column align-items-center">
            <img class="col-12 col-sm-2 col-md-2" :src="resolve_img_url(imgUrl)" alt="">
            <div class="text-container d-flex flex-column align-items-center col-6">
                <h2 class="col-12">{{ titleText }}</h2>
                <p class="col-12 col-sm-10">
                    {{ contentText }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleText: String,
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
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    margin: 0.5vh 0;
    min-height: 25vh;


    .text-container {
        position: absolute;
        right: 25vw;

    }

    img {
        height: 22vh;
    }

    @media only screen and (max-width: 600px) {
        height: 90vh;
        border-radius: 0;
        display: flex !important;
        flex-wrap: wrap;
        flex-direction: column !important;
        justify-content: center;

        .text-container {
            position: static;

            h2 {
                margin-bottom: 2vh;
            }
        }

        img {
            margin: 5vh 0;
        }
    }

}
</style>