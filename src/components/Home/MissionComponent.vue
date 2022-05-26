<template>
    <section id="mission-section" class="d-flex flex-column">
        <div class="mission-title">
            <h1>
                Our Mission
            </h1>
        </div>
        <RightMissionComponent data-aos="fade-left" content-text="To facilitate events for tech startups and offer access to investors and students in the southern
                region." imgUrl="mission_icon1" />
        <LeftMissionComponent data-aos="fade-right"
            content-text="To strengthen the startup and tech eco-system in the southern region through a powerful community."
            imgUrl="mission_icon2" />
        <LeftMissionComponent data-aos="fade-right"
            content-text="Match commercial founders with tech founders to create new tech ventures."
            imgUrl="mission_icon3" />
        <RightMissionComponent data-aos="fade-left"
            content-text="Inspire with inspirational talks from successful tech founders, industry leaders and business angels."
            imgUrl="mission_icon4" />
    </section>
</template>

<script>
import LeftMissionComponent from '@/components/Home/LeftMissionComponent.vue'
import RightMissionComponent from '@/components/Home/RightMissionComponent.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    components: {
        LeftMissionComponent,
        RightMissionComponent
    },
    setup() {
        AOS.init()
    }
}
</script>
    
<style lang="scss" scoped>
#mission-section {
    margin-top: 7.5vh;
    overflow-x: hidden;
}

h1 {
    color: black;
}
</style>