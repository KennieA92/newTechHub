<template>
<section id="mission-section">
    <div class="mission-title">
        <h1>
            Our Mission
        </h1>
    </div>
    <RightMissionComponent content-text="Test" imgUrl="Hulla"/>
    <LeftMissionComponent content-text="Test" imgUrl="Hulla"/>
    <LeftMissionComponent content-text="Test" imgUrl="Hulla"/>
    <RightMissionComponent content-text="Test" imgUrl="Hulla"/>
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

</style>