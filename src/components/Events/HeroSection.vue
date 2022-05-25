<template>
  <div>
    <section id="hero-section" class="d-flex min-vh-100 col-md-12">
      <div class="container d-flex align-items-center">
        <div class="row align-items-center">
          <div id="hero-info" class="col-4">
            <h1 class="text-left">Hello World</h1>
            <p class="text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nulla
              doloribus sequi nisi iusto laudantium numquam omnis perspiciatis
              dolor eos?
            </p>
          </div>
          <div id="hero-img" class="col d-flex justify-content-end">
            <img src="../../assets/bubbles.png" width="700px" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#hero-section {
  background: linear-gradient(
    to bottom,
    $primary-color,
    40%,
    $secondary-color 100%
  );

  #hero-info {
    text-align: left;
  }
  //   #big-c {
  //     background-color: black;
  //   }
}
</style>