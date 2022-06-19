<template>
    <div class="contact-us d-flex flex-wrap justify-content-center">
        <div class="lets-talk d-flex flex-wrap justify-content-center align-items-center">
            <div class="d-flex justify-content-center flex-wrap">

                <h1 class="col-12">Let's have a talk!</h1>
                <p class="col-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ducimus quos,
                    maxime
                    animi alias
                    cum tempore aliquam rerum eveniet facere est. Doloremque reprehenderit eos aperiam vitae
                    consequatur,
                    alias non nihil!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ducimus quos,
                    maxime
                    animi alias
                    cum tempore aliquam rerum eveniet facere est. Doloremque reprehenderit eos aperiam vitae
                    consequatur,
                    alias non nihil!
                </p>
            </div>
        </div>
        <FindUsComponent class="gx-2" />
        <MeetUsComponent class="gx-2" />
        <ContactUsComponent class="gx-2" />
    </div>
</template>

<script>
import ContactUsComponent from '@/components/ContactUs/ContactUsComponent.vue';
import MeetUsComponent from '@/components/ContactUs/MeetUsComponent.vue';
import FindUsComponent from '@/components/ContactUs/FindUsComponent.vue';
export default {
    components: { ContactUsComponent, MeetUsComponent, FindUsComponent }
}
</script>

<style lang="scss" scoped>
.contact-us {
    min-height: 100vh;
    padding-top: 160px;
    background: linear-gradient(to bottom,
            $secondary-color,
            40%,
            $primary-color 100%);

    .lets-talk {
        height: 70vh;
    }

    border-bottom: solid 1px $quaternary-color;

}
</style>