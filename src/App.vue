<template>
  <NavigationComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import "firebase/compat/auth";
import {} from "@/firebase.js"; // all from firebase.js file
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavigationComponent,
    FooterComponent,
  },
  setup() {},
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  font-display: swap;
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
  font-family: "Quantico", "Aqua Grotesque", Avenir, Helvetica, Arial,
    sans-serif;
  font-display: swap;
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