<template>
  <section id="startup-info-section">
    <div
      class="
        main-container
        d-flex
        flex-column
        col-12
        justify-content-center
        align-items-center
      "
    >
      <h1 class="col-10 col-sm-12">
        Are you a <span>Tech Startup</span> looking for <span>Funding?</span>
      </h1>
      <p class="col-6 col-sm-4 pt-5">
        Then this is your chance to meet Tech-Focused investors looking for the
        most pomising <span>Tech Startups</span> in the region.
      </p>
      <a href="#startup-signup-section" class="button"> CONTACT US </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#startup-info-section {
  padding: 5vh 0;

  p {
    font-size: 1.5rem;
  }

  .button {
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
    text-decoration: none;
  }
}

span {
  font-weight: bold;
}
</style>