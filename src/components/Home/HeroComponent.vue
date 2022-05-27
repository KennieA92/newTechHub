<template>
  <Transition name="changebackground">
    <section id="hero-section" class="
        hero-section
        justify-content-center
        align-items-end
        d-flex
        min-vh-100
        col-md-12
      ">
      <div class="
          hero-info
          col-sm-8 col-md-10
          d-flex
          justify-content-sm-center
          flex-md-column
        ">
        <video src="@/assets/Home/hero-video.mp4" autoplay loop muted playsinline></video>
        <div class="
            hero-info-panel
            col-sm-8 col-md-5 col-lg-4
            justify-content-end
             my-md-0
            justify-content-md-center
            align-items-center
          ">
          <h1 class="col-sm-12 col-md-12"> StartUp</h1>
          <p class="col-sm-12 col-md-12">
            We support tech startups, students and investors to grow the tech
            eco-system in southern Denmark
          </p>
          <router-link to="/techStartUp" class="btn-ticket"> SEE MORE </router-link>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
export default {
  setup() { },
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-info {
    text-align: center;
    margin-bottom: 10vh;

    @media only screen and (max-width: 600px) {
      margin-bottom: 4vh;
    }

    video {
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      object-fit: cover;
      filter: brightness(70%);
    }

    .hero-info-panel {
      display: flex;
      z-index: 2;
      flex-direction: column;

      backdrop-filter: blur(2px);

      @media only screen and (max-width: 600px) {
        width: 80vw;
      }

      .btn-ticket {
        width: 145px;
        min-height: 45px;
        background-color: $tertiary-color;
        color: $quaternary-color;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        text-decoration: none;
      }
    }
  }
}

// @media only screen and (max-width: 550px) {
//   .hero-section {
//     margin-bottom: -15vh;
//     min-height: 40vh !important;

//     .hero-info {
//       margin-top: 25vh;

//       video {
//         height: 50vh;
//         object-fit: scale-down;
//         object-position: unset;

//       }
//     }
//   }
// }
</style>