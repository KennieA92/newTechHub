<template>
  <div>
    <div class="block container">
      <div class="card mb-3">
        <h3 class="m-4">Event Heading</h3>
        <button type="button" class="close" @click="$emit('close')">X</button>
        <img
          class="card-img-top"
          :src="require('@/assets/StartUp/Image3.png')"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Event Heading</h5>
          <p class="card-text my-3">
            Event Description -- Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam, omnis. Quod explicabo sint ad culpa omnis
            amet voluptatem exercitationem id?
          </p>
          <div class="row mt-4 mb-2">
            <div class="col">
              <h5 class="card-title"><i class="fa-solid fa-clock"></i> WHEN</h5>
              <p class="card-text m-3 text-center">Somewhen</p>
            </div>
            <div class="col">
              <h5 class="card-title">
                <i class="fa-solid fa-location-dot"></i> WHERE
              </h5>
              <p class="card-text m-3 text-center">Somewhere</p>
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
.card {
  border-radius: 30px;
}
</style>