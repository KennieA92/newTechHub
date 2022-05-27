<template>
    <section id="tech-slider-section">
        <div id="hero-slider" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#hero-slider" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#hero-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#hero-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img :src="require('@/assets/StartUp/Image1.png')" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-block">
                        <h1>TechHub Reboot Event</h1>
                        <p>Tech&Tequila Event hosted at Esbjerg Streetfood by Kasper, Ronni & Trine. </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <img :src="require('@/assets/StartUp/Image2.png')" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-block">
                        <h1>Networking Event</h1>
                        <p>People networking at Esbjerg Streetfood, during the Tech & Tequila event. </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                    <img :src="require('@/assets/StartUp/Image3.png')" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-block">
                        <h1>Engaging Presentation</h1>
                        <p>People listening intently to the presentation done by Ronni. </p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-slider" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-slider" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.carousel-inner {
    height: 60vh;

    .carousel-item {
        height: 100%;

        img {
            height: 100%;
            object-fit: cover;
            object-position: top center;
            filter: brightness(0.40);

        }
    }
}
</style>