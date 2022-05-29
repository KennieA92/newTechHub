<template>
  <div>
    <div
      class="block container d-flex justify-content-center"
      @click="$emit('close')"
    >
      <div class="card col-sm-12 col-md-6 mb-3">
        <h3 class="m-4">{{ event.name }}</h3>
        <!-- <button type="button" class="close">X</button> -->
        <img class="card-img-top" :src="event.imgUrl" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text my-3">
            {{ event.description }}
          </p>
          <div class="row mt-4 mb-2">
            <div class="col">
              <h5 class="card-title">
                <i class="fa-solid fa-clock"></i>
                {{ event.date.day + " " + event.date.month }}
              </h5>
              <p class="card-text m-3 text-center">
                at {{ event.date.time }} GMT+1
              </p>
            </div>
            <div class="col">
              <h5 class="card-title">
                <i class="fa-solid fa-location-dot"></i>
                {{ event.location.city }}
              </h5>
              <p class="card-text m-3 text-center">
                {{ event.location.street }}
              </p>
            </div>
          </div>
          <small class="text-muted">@TechHubSyd</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
  emits: ["close"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.block {
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .card {
    border: 1px solid black;
    box-shadow: 5px 10px;
  }
}
</style>