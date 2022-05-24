<template>
  <EventModalWindow v-if="showModal" @close="toggleModal" />
  <div>
    <div @click="toggleModal" class="card" style="width: 18rem">
      <img
        :src="require('@/assets/StartUp/Image3.png')"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EventModalWindow from "./EventModalWindow.vue";
export default {
  components: { EventModalWindow },
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 30px;
  .card-img-top {
    border-radius: 30px 30px 0 0;
  }
}
</style>
