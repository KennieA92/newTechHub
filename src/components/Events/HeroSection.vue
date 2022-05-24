<template>
  <div>
    <section id="hero-section" class="d-flex min-vh-100 col-md-12">
      <div class="container d-flex align-items-center">
        <div class="row-5">
          <div id="hero-info" class="col-5 text-left">
            <h1 class="text-left">Hello World</h1>
            <p class="text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nulla
              doloribus sequi nisi iusto laudantium numquam omnis perspiciatis
              dolor eos?
            </p>
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
}
</style>