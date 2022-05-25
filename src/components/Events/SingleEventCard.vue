<template>
  <EventModalWindow v-if="showModal" @close="toggleModal" />
  <div class="col-3">
    <div @click="toggleModal" class="card">
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
  border-radius: 30px;
  background: $primary-color;
  color: $quaternary-color;
  height: 400px;
  .card-img-top {
    border-radius: 30px 30px 0 0;
  }
  .kind {
    margin: 5px 0;
  }
}
</style>
