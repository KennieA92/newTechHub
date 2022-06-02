<template>
  <div class="card card-body mt-4">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input
          type="text"
          class="form-control"
          v-model="form.description"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Date</label>
        <div class="FormDate">
          <input type="number" v-model="form.date.day" placeholder="dd" />
          <span class="FormDate__divider">/</span>
          <input type="number" placeholder="mm" v-model="form.date.month" />
          <span class="FormDate__divider">/</span>
          <input type="number" placeholder="yyyy" v-model="form.date.year" />
        </div>
      </div>

      <div class="form-group mt-3">
        <label>City</label>
        <input
          type="text"
          class="form-control"
          v-model="form.location.city"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Street</label>
        <input
          type="text"
          class="form-control"
          v-model="form.location.street"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>ImgUrl</label>
        <input
          type="text"
          class="form-control"
          v-model="form.imgUrl"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Genre</label>
        <input type="text" class="form-control" v-model="form.genre" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create TechEvent
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { createTechEvent } from "@/firebase.js"; // maybe this make error
export default {
  setup() {
    let form = reactive({
      name: "",
      description: "",
      date: {
        day: "",
        month: "",
        year: "",
      },
      location: {
        city: "",
        street: "",
      },
      imgUrl: "",
      genre: "",
    });

    // Seperate date

    const onSubmit = async () => {
      // spread operator to add field + invoking our createTechEvent function from firebase.js
      await createTechEvent({ ...form });
      // after create - empty input field
      form.name = "";
      form.description = "";
      form.date = "";
      form.location = "";
      form.imgUrl = "";
      form.genre = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style lang="scss" scoped>
form {
  color: black;
}
</style>