<template>
  <Transition name="changebackground">
    <section id="hero-section" class="hero-section justify-content-center d-flex min-vh-100 col-md-12">
      <div class="hero-info col-sm-8 col-md-10 d-flex justify-content-sm-center flex-md-column">
        <video src="@/assets/hero_video.mp4" autoplay loop muted playsinline></video>
        <div class="hero-info-panel col-sm-8 col-md-5 col-lg-4 justify-content-center align-items-center">
          <h1 class="col-sm-10 col-md-10">Heading</h1>
          <p class="col-sm-10 col-md-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed mattis
            risus.
            Integer blandit pulvinar risus, vel tempor orci tincidunt eget. Donec sed ligula diam. Donec et volutpat
            nunc,
            at tincidunt risus. Nullam </p>
          <a href="/tickets.html" class="btn-ticket "> BUY TICKET </a>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-info {
    text-align: start;

    video {
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      object-fit: cover;
      filter: brightness(50%);
    }

    .hero-info-panel {
      display: flex;
      z-index: 2;
      flex-direction: column;

      @media only screen and (max-width: 600px) {
        width: 80vw;
      }

      .btn-ticket {
        width: 145px;
        min-height: 45px;
        background-color: $tertiary-color;
        color: $quaternary-color;
        border-style: none;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
    }
  }
}
</style>