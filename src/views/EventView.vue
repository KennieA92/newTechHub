<template>
  <div>
    <EventModalWindow />
    <HeroSection />
    <EventsSection />
  </div>
</template>

<script>
import HeroSection from "@/components/Events/HeroSection.vue";
import EventsSection from "../components/Events/EventsSection.vue";
import EventModalWindow from "../components/Events/EventModalWindow.vue";
export default {
  components: {
    HeroSection,
    EventsSection,
    EventModalWindow,
  },
};
</script>




<style lang="scss" scoped>
</style>