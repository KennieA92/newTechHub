<template>
  <div>
    <section id="hero-section" class="min-vh-100 col-md-12">
      <div class="container">
        <div class="col-5 text-left" id="hero-info">
          <h1 class="text-left my-5">| Our Events:</h1>
        </div>
        <div class="row d-flex justify-content-center">
          <SingleEventCard
            @click="toggleModal"
            v-for="event in techEvents"
            :key="event.id"
            :event="event"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SingleEventCard from "./SingleEventCard.vue";
import { useLoadTechEvents } from "@/firebase";
// import { ref } from "@vue/reactivity";
export default {
  components: {
    SingleEventCard,
  },
  setup() {
    const techEvents = useLoadTechEvents();
    return {
      techEvents,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: top center;
}
.container {
  text-align: left;
}

#hero-section {
  background: $quaternary-color;
  color: #333;
}

.card-img-top {
  height: 15vh;
}
</style>