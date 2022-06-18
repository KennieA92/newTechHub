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
                <div class="company-logo col-12 col-sm-3">
                    <a class="py-5"
                        href="https://www2.deloitte.com/dk/da/pages/about-deloitte/topics/about-deloitte.html">
                        <img src="@/assets/Home/company-logo1.png" alt="company-logo-1">
                    </a>
                </div>
                <div class="company-logo col-12 col-sm-3">
                    <a class="py-5" href="https://vf.dk/">
                        <img src="@/assets/Home/company-logo2.webp" alt="company-logo-2">
                    </a>
                </div>
                <div class="company-logo col-12 col-sm-3">
                    <a class="py-5" href="https://www.businessesbjerg.com/da/">
                        <img src="@/assets/Home/company-logo3.png" alt="company-logo-3">
                    </a>
                </div>
                <div class="company-logo col-12 col-sm-3">
                    <a class="py-5"
                        href="https://www.esbjerg.aau.dk/Uddannelser/?gclid=CjwKCAjwkMeUBhBuEiwA4hpqEAtlqKYvs4g8NOJGhrqOCA6s_iQZjUP-C_Pu220fVjLs3PIE3nLL3hoCg3MQAvD_BwE">
                        <img src="https://i0.wp.com/techhubsyd.dk/wp-content/uploads/2019/08/AAU_CIRCLE_ESB_blue_rgb.png?w=283&ssl=1"
                            alt="company-logo-5">
                    </a>
                </div>
                <div class="company-logo col-12 col-sm-3">
                    <a class="py-5"
                        href="https://www.proff.dk/firma/a.-thomsen-holding-aps/esbjerg-v/holdingselskaper/GM2N4FI06Y4/">
                        <img src="https://i0.wp.com/techhubsyd.dk/wp-content/uploads/2019/04/A.-Thomsen-holding-aps-1.png?w=500&ssl=1"
                            alt="company-logo-7">
                    </a>
                </div>

                <div class="company-logo col-12 col-sm-3">
                    <a class="py-5" href="https://www.ebanklauridsen.dk/">
                        <img src="https://i0.wp.com/techhubsyd.dk/wp-content/uploads/2019/11/E.-Bank-Lauridsen-Holding-A_S.png?w=500&ssl=1"
                            alt="company-logo-8">
                    </a>
                </div>

                <div class="company-logo col-12 col-sm-3 ">
                    <a class="py-5"
                        href="https://www.easv.dk/da/?utm_source=google&utm_medium=cpc&utm_campaign=ca6459&utm_content=generel&gclid=CjwKCAjwkMeUBhBuEiwA4hpqEP7DX8wea5ThvgTz_GAB6HSYPMaqiegyjSEZ88SZ9yNNA7vUrqvEhRoCNSUQAvD_BwE">
                        <img src="@/assets/Home/company-logo6.png" alt="company-logo-6">
                    </a>
                </div>
                <div class="company-logo col-12 col-sm-3 ">
                    <a class="py-5" href="https://innovationsfonden.dk/da">
                        <img src="@/assets/Home/company-logo4.png" alt="company-logo-4">
                    </a>
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

    background: linear-gradient(to bottom,
            $secondary-color,
            40%,
            $primary-color 100%);


    .associated-partners {
        font-size: 1.1rem;

    }

    .company-container {
        background: $quaternary-color;
        padding: 2vw 0;

        .company-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: solid 1px $primary-color;
            height: 160px;

            img {
                max-width: 150px;

            }
        }
    }

}
</style>