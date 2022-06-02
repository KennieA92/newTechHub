<template>
  <EventModalWindow v-if="showModal" @close="toggleModal" :event="event" />
  <div class="col-12 col-sm-6 col-md-3 my-1">
    <div @click="toggleModal" class="card">
      <div id="date">
        <p class="date-text">{{ event.date.day }}</p>
        <h4 class="date-text">May</h4>
      </div>
      <img :src="event.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body m-2">
        <p class="card-text">{{ event.genre }}</p>
        <h5 class="card-title">{{ event.name }}</h5>
        <p class="card-text kind">{{ event.description }}</p>
        <p class="card-text">
          {{ event.location.city + " " + event.location.street }}
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import EventModalWindow from "./EventModalWindow.vue";
export default {
  props: ["event"],
  components: { EventModalWindow },
  setup() {
    const showModal = ref(false);
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };
    return {
      showModal,
      toggleModal,
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  background: $primary-color;
  color: $quaternary-color;
  height: 400px;

  .kind {
    margin: 5px 0;
  }
  #date {
    width: 90px;
    height: 90px;
    position: absolute;
    margin: 20px;
    background: $primary-color;
    color: $quaternary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .date-text {
      margin: 0;
      font-size: 1.5rem;
    }
  }
}
img {
  height: 200px;
  object-fit: cover;
}
</style>
