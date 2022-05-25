<template>
  <div>
    <section id="hero-section" class="min-vh-100 col-md-12">
      <div class="container">
        <div class="row">
          <div class="col-5 text-left" id="hero-info">
            <h1 class="text-left my-5">| Our Events:</h1>
          </div>
          <div class="row">
            <SingleEventCard @click="toggleModal" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SingleEventCard from "./SingleEventCard.vue";
export default {
  components: {
    SingleEventCard,
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