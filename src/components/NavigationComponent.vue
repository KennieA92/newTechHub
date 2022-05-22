<template>
  <div class="col-12 d-flex justify-content-center" v-if="showNavbar">
    <nav class="navbar navbar-expand-lg sticky col-12 col-sm-12 col-md-11">
      <div class="d-flex container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo.svg" alt="logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#project-section">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-section">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    let showNavbar = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
      window.pageYOffset > 0 || route.path !== "/"
        ? (showNavbar.value = true)
        : (showNavbar.value = false);
    };
    return { showNavbar };
  },
};
</script>

<style lang="scss" scoped>
nav {
  min-height: 10vh;
  padding: 10px;
  border-bottom: 2px solid darken($primary-color, 10%);
  .navbar-toggler {
    border-radius: 0px;
    border: 2px solid $text-color;
    .navbar-toggler-icon {
      text-align: center;
      i {
        color: $text-color;
        font-size: 28px;
      }
    }
  }
  .navbar-nav {
    .nav-link {
      padding-left: 2rem;
      padding-right: 0.5rem;
    }
  }
  .navbar-brand {
    img {
      height: 8vh;
    }
  }
  a {
    font-weight: bold;
    color: $quaternary-color;
    &:hover {
      color: $tertiary-color;
    }
  }
  &.sticky {
    background-color: $primary-color;
    top: 0;
    z-index: 5;
  }
}
.fade-enter-active {
  transition: all 1s;
}
.fade-leave-active {
  transition: all 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>