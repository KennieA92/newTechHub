<template>
  <div>
    <div class="block container" @click="$emit('close')">
      <img :src="image.url" alt="Card image cap" />
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.block {
  position: fixed;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    object-fit: contain;
    max-width: 100%;
    height: 80vh;
  }
}
</style>