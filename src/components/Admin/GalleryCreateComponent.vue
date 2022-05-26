<template>
  <div class="gallery-create card card-body mt-4">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>ImgUrl</label>
        <input type="text" class="form-control" v-model="form.imgUrl" required />
      </div>


      <button type="submit" class="btn btn-success mt-3">
        Create GalleryImage
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { createTestimonial } from '@/firebase.js' // maybe this make error
export default {
  setup() {
    const form = reactive({
      name: '',
      imgUrl: '',

    })
    const onSubmit = async () => {
      // spread operator to add field + invoking our createTechEvent function from firebase.js
      await createTestimonial({ ...form })
      // after create - empty input field
      form.name = ''
      form.imgUrl = ''
    }
    return { form, onSubmit }
  }
}
</script>

<style lang="scss" scoped>
.gallery-create {
  color: black;
}
</style>