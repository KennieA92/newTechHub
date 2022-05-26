<template>
  <NavigationComponent />
  <router-view />
</template>

<script>
import "firebase/compat/auth";
import { } from "@/firebase.js"; // all from firebase.js file
import NavigationComponent from "@/components/NavigationComponent.vue";
export default {
  components: {
    NavigationComponent,
  },
  setup() {

  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Aqua Grotesque", sans-serif;
}

@font-face {
  font-family: "Aqua Grotesque";
  src: url("./assets/fonts/aqua.ttf");
}

#app {
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