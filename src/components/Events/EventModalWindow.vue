<template>
  <div>
    <div class="block container" @click="$emit('close')">
      <div class="card mb-3">
        <h3 class="m-4">{{ event.name }}</h3>
        <!-- <button type="button" class="close">X</button> -->
        <img class="card-img-top" :src="event.imgUrl" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text my-3">
            {{ event.description }}
          </p>
          <div class="row mt-4 mb-2">
            <div class="col">
              <h5 class="card-title"><i class="fa-solid fa-clock"></i> WHEN</h5>
              <p class="card-text m-3 text-center">{{ event.date }}</p>
            </div>
            <div class="col">
              <h5 class="card-title">
                <i class="fa-solid fa-location-dot"></i> WHERE
              </h5>
              <p class="card-text m-3 text-center">
                {{ event.location.city + " " + event.location.street }}
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
  width: 70vh;
}
</style>