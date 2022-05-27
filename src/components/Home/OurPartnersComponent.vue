<template>
    <section id="our-partners-section">
        <div class="main-container d-flex flex-column col-12 justify-content-center align-items-center pt-2">
            <h1 class="col-10 col-sm-12">Our Partners</h1>
            <p class="d-flex justify-content-center align-text-center col-12 pb-3 associated-partners">We are proud to
                be a associated
                with the
                following
                companies</p>
            <div class="company-container col-10 d-flex flex-wrap justify-content-center align-items-center gap-4">
                <div class="company-logo col-6 col-sm-3">
                    <img src="@/assets/Home/company-logo1.png" alt="company-logo-1">
                </div>
                <div class="company-logo col-6 col-sm-3">
                    <img src="@/assets/Home/company-logo2.png" alt="company-logo-2">
                </div>
                <div class="company-logo col-6 col-sm-3">
                    <img src="@/assets/Home/company-logo3.png" alt="company-logo-3">
                </div>
                <div class="company-logo col-6 col-sm-3">
                    <img src="https://i0.wp.com/techhubsyd.dk/wp-content/uploads/2019/08/AAU_CIRCLE_ESB_blue_rgb.png?w=283&ssl=1"
                        alt="company-logo-5">
                </div>
                <div class="company-logo col-6 col-sm-3">
                    <img src="https://i0.wp.com/techhubsyd.dk/wp-content/uploads/2019/04/A.-Thomsen-holding-aps-1.png?w=500&ssl=1"
                        alt="company-logo-7">
                </div>

                <div class="company-logo col-6 col-sm-3">
                    <img src="https://i0.wp.com/techhubsyd.dk/wp-content/uploads/2019/11/E.-Bank-Lauridsen-Holding-A_S.png?w=500&ssl=1"
                        alt="company-logo-8">
                </div>

                <div class="company-logo col-6 col-sm-3">
                    <img src="@/assets/Home/company-logo6.png" alt="company-logo-6">
                </div>
                <div class="company-logo col-6 col-sm-3">
                    <img src="@/assets/Home/company-logo4.png" alt="company-logo-4">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#our-partners-section {
    padding: 5vh 0;

    background: $primary-color;


    .associated-partners {
        background: $primary-color;
        font-size: 1.1rem;

    }

    .company-container {
        background: $quaternary-color;
        padding: 2vw 0;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>