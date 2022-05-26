<template>
    <section id="whatwedo-section">

        <div class="whatwedo-title">
            <h1>
                What We Do
            </h1>
        </div>
        <LeftWhatWeDoComponent titleText="Inspirational talks"
            content-text="We partner with inspirational leaders and tech entrepreneurs who have either built own venture or invested in startups.

They go on stage to hand out wisdom from the biggest success to various failures. This to tell the true story of building tech companies and to inspire others."
            imgUrl="about_icon1" />
        <RightWhatWeDoComponent titleText="Investor pitches" content-text="We gather tech startups and smart investors to match the two so we can help fuel the next generation of tech startups in the region.

Startups will be chosen from four parameters such as: Team, Product/service, Market potential and business model."
            imgUrl="about_icon2" />
        <RightWhatWeDoComponent titleText="Startups pitch for student jobs"
            content-text="A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of startups looking to strengthen their core team."
            imgUrl="about_icon3" />
        <LeftWhatWeDoComponent titleText="Co-founder meetups"
            content-text="It is often hard to find the right co-founder for your startup. We setup a match-making event where commercial founders together with tech development founders can setup the right team from the start."
            imgUrl="about_icon4" />
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
#whatwedo-section {
    margin-top: 7.5vh;
}

h1 {
    color: black;
}
</style>