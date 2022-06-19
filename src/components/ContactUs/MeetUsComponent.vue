<template>
    <section id="meet-us-section" class="col-12 col-md-4">
        <div class="main-container d-flex flex-wrap col-12 justify-content-center">
            <h1 class="col-12">Meet Us</h1>
            <div
                class="meet-us-container col-12 d-flex flex-wrap flex-column align-items-center justify-content-around">
                <div class="info-container col-10 d-flex flex-wrap justify-content-start align-items-center">
                    <div class="d-flex col-12">
                        <img class="col-1" src="@/assets/Home/about_icon1.svg" alt="">
                        <p class="px-3 col-10">+45 26 85 91 80</p>
                    </div>
                    <div class="d-flex col-12">
                        <img class="col-1" src="@/assets/Home/about_icon1.svg" alt="">
                        <p class="px-3 col-10"><a href="https://techhubsyd.dk"> https://techhubsyd.dk</a></p>
                    </div>
                    <div class="d-flex col-12">
                        <img class="col-1" src="@/assets/Home/about_icon1.svg" alt="">
                        <p class="px-3 col-10"> Ahornvænget 26, 6710 Esbjerg V</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-container {
    a {
        text-decoration: none;
        color: $quaternary-color;
    }

    .meet-us-container {
        background: rgba(black, 0.4);
        backdrop-filter: blur(10px);
        height: 400px;

        .info-container {
            height: 300px;
            text-align: start;
            font-size: 1.2rem;
        }
    }

}
</style>