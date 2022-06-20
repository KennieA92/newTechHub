<template>
  <div class="admin">
    <div class="admin-box min-vh-100 d-flex justify-content-center align-items-center flex-wrap">
      <div class="admin-info-box">
        <h1 class=" col-12">This is an admin page</h1>
        <h2 class=" col-12">Use this page to create data to populate the website.</h2>
        <button class="btn-logout col-12" @click="logout"> Logout
        </button>
      </div>
    </div>
    <div class="create-container">
      <h1>Create Gallery Image</h1>
      <LeftStartUpComponent class="left-box" data-aos="fade-right" data-aos-duration="1000"
        contentText="Create Gallery Images by selecting a File or by Dragging and Dropping one unto the box." />
      <div class="gallery-create mt-3 d-flex col-12 justify-content-center">
        <div @dragover.prevent @drop.prevent class="d-flex flex-wrap justify-content-center col-8">
          <label class="form-label " for="customFile">
            <h3>Default file input example</h3>
          </label>
          <input @change="upload" type="file" class="form-control" id="customFile" />
          <div class="d-flex box justify-content-center align-items-center col-12" @drop="upload"> Drag to Upload</div>
        </div>
      </div>
    </div>
    <div class="create-container">
      <h1>Create Event</h1>
      <RightStartUpComponent class="right-box" data-aos="fade-left" data-aos-duration="1000"
        contentText="Create Events by filling out the form below." />
      <TechEventCreate />
    </div>

    <div class="create-container">
      <h1>Create Testimonial</h1>
      <LeftStartUpComponent class="left-box" data-aos="fade-right" data-aos-duration="1000"
        contentText="Create Testimonials by filling out the form below" />
      <TestimonialCreateComponent />
      <TestimonialListComponent />
    </div>
  </div>
</template>


<script>
// Stuff for Login (Auth)
import firebase from "firebase/compat/app";
import { ref, onBeforeMount } from "vue";
import { /*useRoute,*/ useRouter } from "vue-router";

import LeftStartUpComponent from "@/components/StartUp/LeftStartUpComponent.vue";
import RightStartUpComponent from "@/components/StartUp/RightStartUpComponent.vue";
import TechEventCreate from "@/components/Admin/TechEventCreateComponent.vue";
import { uploadImage } from "@/firebase.js";
import TestimonialCreateComponent from "@/components/Admin/TestimonialCreateComponent.vue";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "HomeView",
  components: {
    TechEventCreate,
    TestimonialCreateComponent,
    LeftStartUpComponent,
    RightStartUpComponent
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

    AOS.init();

    return { name, logout, upload };
  },
};
</script>

<style lang='scss'>
.admin {
  overflow-x: hidden;
  background: linear-gradient(to bottom,
      $primary-color,
      40%,
      $secondary-color 100%);


  p {
    color: $quaternary-color;
  }

  .btn-logout {
    width: 145px;
    min-height: 45px;
    background-color: red;
    color: $quaternary-color;
    border: none;
    border-radius: 25px;
    margin-top: 20px;
    text-decoration: none;

    &:focus {
      transform: scale(1.05);
    }

    &:hover {
      background-color: $primary-color;
      text-decoration: none;
    }
  }

  .create-container {

    padding: 5vh 0;
    border-top: solid 1px $quaternary-color;

    .gallery-create {


      .form-control {
        background: $tertiary-color;
        border-radius: 0;
        color: white;
        border: 2px solid $tertiary-color;
      }

      .box {
        min-height: 500px;
        border-radius: 0;

        border: 2px solid $tertiary-color;
        color: $quaternary-color;
        background: $secondary-color;
      }

      @media only screen and (max-width: 600px) {
        .box {
          display: none !important;
        }
      }
    }
  }
}
</style>