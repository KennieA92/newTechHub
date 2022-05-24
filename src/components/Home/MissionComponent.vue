<template>
    <section id="mission-section" class="d-flex min-vh-100 flex-column">
        <div class="mission-title">
            <h1>
                Our Mission
            </h1>
        </div>
        <RightMissionComponent data-aos="fade-left" content-text="To facilitate events for tech startups and offer access to investors and students in the southern
                region." imgUrl="mission-placeholder" />
        <LeftMissionComponent data-aos="fade-right"
            content-text="To strengthen the startup and tech eco-system in the southern region through a powerful community."
            imgUrl="mission-placeholder" />
        <LeftMissionComponent data-aos="fade-right"
            content-text="Match commercial founders with tech founders to create new tech ventures."
            imgUrl="mission-placeholder" />
        <RightMissionComponent data-aos="fade-left"
            content-text="Inspire with inspirational talks from successful tech founders, industry leaders and business angels."
            imgUrl="mission-placeholder" />
    </section>
</template>

<script>
import LeftMissionComponent from '@/components/Home/LeftMissionComponent.vue'
import RightMissionComponent from '@/components/Home/RightMissionComponent.vue'
export default {
    components: {
        LeftMissionComponent,
        RightMissionComponent
    },
}
</script>
    
<style lang="scss" scoped>
#mission-section {
    margin-top: 5vh;
}

h1 {
    color: black;
}
</style>