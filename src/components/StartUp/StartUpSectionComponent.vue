<template>
    <section id="startup-section" class="d-flex flex-column">
        <div class="startup-title">
            <h1>
                For Startups
            </h1>
        </div>
        <LeftStartUpComponent data-aos="fade-right" data-aos-duration="1000"
            contentText="You will meet a solid group of investors and sharp VC's, ready to hear your pitch"
            imgUrl="mission-placeholder" />
        <RightStartUpComponent data-aos="fade-left" data-aos-duration="1000"
            contentText="You will be invited to do a 5 min. pitch" imgUrl="mission-placeholder" />
        <LeftStartUpComponent data-aos="fade-right" data-aos-duration="1000"
            contentText="After the pitch you can connect and network with investors and setup meetings to see if we have a match to scale your startup."
            imgUrl="mission-placeholder" />

    </section>
</template>

<script>
import LeftStartUpComponent from '../StartUp/LeftStartUpComponent.vue';
import RightStartUpComponent from '../StartUp/RightStartUpComponent.vue';
export default {
    components: {
        RightStartUpComponent,
        LeftStartUpComponent
    },
}
</script>

<style lang="scss" scoped>
#startup-section {
    padding: 5vh 0;
    overflow-x: hidden;
    background: $quaternary-color;

    .startup-title {

        h1 {
            color: black;
        }
    }
}
</style>