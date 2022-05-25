<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Task</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, title, company, website, message } in testimonials" :key="id">
          <td>{{ name }}</td>
          <td>{{ title }}</td>
          <td>{{ company }}</td>
          <td>{{ website }}</td>
          <td>{{ message }}</td>
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the project we are iterating -->
            <router-link :to="`/Testimonial/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteProject and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteTestimonial(id)">
              Delete
            </button>
            <!--  -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadTestimonials, deleteTestimonial } from '@/firebase.js'
export default {
  setup() {
    const techEvents = useLoadTestimonials()
    return { techEvents, deleteTestimonial }
  }
}
</script>

<style lang="scss" scoped>
</style>