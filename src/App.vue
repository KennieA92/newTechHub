<template>
  <NavigationComponent />
  <router-view />
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {} from "@/firebase.js"; // all from firebase.js file
import { onBeforeMount } from "vue"; // lifecycle hook
import { useRouter, useRoute } from "vue-router"; // able to use methods from vue-router (replace etc)
import NavigationComponent from "@/components/NavigationComponent.vue";
export default {
  components: {
    NavigationComponent,
  },
  setup() {
    const router = useRouter(); // just declaring them
    const route = useRoute();
    onBeforeMount(() => {
      //
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          // dont have a user - not logged in)
          router.replace("/login"); // send them to this place
        } else if (route.path == "/login" || route.path == "/register") {
          // if logged in on this page, send us to home
          router.replace("/"); // test: go to frontpage, should redirect
        }
      });
    });
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  font-family: "Aqua Grotesque";
}

@font-face {
  font-family: "Aqua Grotesque";
  src: url("./assets/fonts/aqua.ttf");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $quaternary-color;
  background: $quaternary-color;
}

/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $primary-color;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $tertiary-color;

  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $secondary-color;
}
</style>