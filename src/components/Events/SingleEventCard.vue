<template>
  <EventModalWindow v-if="showModal" @close="toggleModal" />
  <div class="col-xl-3">
    <div @click="toggleModal" class="card">
      <div id="date">
        <p class="date-text">19</p>
        <h4 class="date-text">May</h4>
      </div>
      <img
        :src="require('@/assets/StartUp/Image3.png')"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body m-2">
        <p class="card-text kind">Kind of event:</p>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Location</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import EventModalWindow from "./EventModalWindow.vue";
export default {
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
</style>
