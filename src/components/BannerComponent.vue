<template>
    <section id="banner-section" class="d-flex col-12 justify-content-center align-items-center" v-if="showBanner">
        <img src="@/assets/cake.svg" alt="">

        <router-link to="/events">
            <div @click="clickBanner">
                <p class="">
                    {{ contentText }}
                </p>
            </div>

        </router-link>
        <img src="@/assets/cake.svg" alt="">

    </section>
</template>

<script>

import { ref, onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
    props: {
        contentText: String,
        imgUrl: String
    },
    setup() {
        const route = useRoute();
        let showBanner = ref(false);
        let hideBanner = ref(false);


        const clickBanner = () => {
            hideBanner = ref(true);
            console.log(hideBanner);
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });
        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        const handleScroll = () => {
            window.pageYOffset > window.innerHeight - 150 || route.path !== "/"
                ? (showBanner.value = true)
                : (showBanner.value = false);
        };
        return { showBanner, clickBanner, hideBanner };
    },
}
</script>

<style lang="scss" scoped>
#banner-section {
    background: $tertiary-color;
    color: $quaternary-color;
    height: 80px;
    top: 80px;
    z-index: 5555;
    position: fixed;

    p {
        margin: 0 2vw;
    }

    font-size: 1rem;
    font-weight: bold;

    a {
        color: $quaternary-color;
        text-decoration: none;
    }

    img {
        height: 50px;
        padding: 0 2vw;
    }
}
</style>