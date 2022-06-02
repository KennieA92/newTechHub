<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <h1>Welcome {{ name }}</h1>
    <button @click="logout">
      <!-- v-if="user"  -->
      Logout
    </button>
    <div @dragover.prevent @drop.prevent>
      <label class="form-label" for="customFile"
        >Default file input example</label
      >
      <input
        @change="upload"
        type="file"
        class="form-control"
        id="customFile"
      />
      <div class="box" @drop="upload"></div>
    </div>
    <TechEventCreate />
    <TechEventList />

    <TestimonialCreateComponent />
    <TestimonialListComponent />
  </div>
</template>


<script>
// Stuff for Login (Auth)
import firebase from "firebase/compat/app";
import { ref, onBeforeMount } from "vue";
import { /*useRoute,*/ useRouter } from "vue-router";

import TechEventCreate from "@/components/Admin/TechEventCreateComponent.vue";
import TechEventList from "@/components/Admin/TechEventListComponent.vue";
import { uploadImage } from "@/firebase.js";
import TestimonialCreateComponent from "@/components/Admin/TestimonialCreateComponent.vue";
export default {
  name: "HomeView",
  components: {
    TechEventCreate,
    TechEventList,
    TestimonialCreateComponent,
  },
  setup() {
    const router = useRouter();
    //const route = useRoute()
    const name = ref("");

    const upload = async (img) => {
      await uploadImage(img);
    };
    onBeforeMount(() => {
      const user = firebase.auth().currentUser; // checking for the user info and store it in 'user'
      //console.log("testUser: ", user.email)
      if (user) {
        name.value = user.email.split("@")[0]; // check for @ and split it there. so stuff before the @ sign.
      } else {
        router.push("/login");
      }
    });

    const logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log("err", error.message);
          // An error happened.
        });
    };
    return { name, logout, upload };
  },
};
</script>

<style lang='scss'>
.admin {
  padding-top: 80px;
  color: black;

  .box {
    height: 500px;
    width: 500px;
    background: pink;
  }
}
</style>