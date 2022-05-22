<template>
<section id="whatwedo-section">

    <div class="whatwedo-title">
        <h1>
            What We Do
        </h1>
    </div>
    <LeftWhatWeDoComponent titleText="TestTitle" content-text="Test" imgUrl="Hulla"/>
    <RightWhatWeDoComponent titleText="TestTitle" content-text="Test" imgUrl="Hulla"/>
    <RightWhatWeDoComponent titleText="TestTitle" content-text="Test" imgUrl="Hulla"/>
    <LeftWhatWeDoComponent titleText="TestTitle" content-text="Test" imgUrl="Hulla"/>
</section>
</template>

<script>
import RightWhatWeDoComponent from './RightWhatWeDoComponent.vue'
import LeftWhatWeDoComponent from './LeftWhatWeDoComponent.vue'
    export default {
         components: {
    RightWhatWeDoComponent,
    LeftWhatWeDoComponent
},
    }
</script>

<style lang="scss" scoped>

</style>