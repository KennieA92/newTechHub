<template>
  <div class="home">
    <HeroComponent />
    <MissionComponent />
    <WhatWeDoComponent />
    <TestimonialsComponent />
    <OurPartnersComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from '@/components/Home/HeroComponent.vue'
import MissionComponent from '@/components/Home/MissionComponent.vue'
import WhatWeDoComponent from '@/components/Home/WhatWeDoComponent.vue'
import TestimonialsComponent from '@/components/Home/TestimonialsComponent.vue'
import OurPartnersComponent from '@/components/Home/OurPartnersComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    MissionComponent,
    WhatWeDoComponent,
    TestimonialsComponent,
    OurPartnersComponent
  }
}
</script>
