<template>
  <section id="contact-us-section" class="col-12 col-md-4">
    <div class="main-container d-flex flex-wrap col-12 justify-content-center">
      <h1 class="col-12">Contact Us</h1>
      <form action="submit" class="
          contact-form
          d-flex
          col-12 col-md-12
          justify-content-center
          flex-wrap
        ">
        <div class="content-container d-flex flex-column col-10 col-md-10">
          <label class="align-self-start" for="Email">Email Adress</label>
          <input class="my-1 p-2" type="email" id="Email" name="Email" placeholder="Email Adress" required />
          <label class="align-self-start" for="Name">Name</label>
          <input class="my-1 p-2" type="text" id="Name" name="Name" placeholder="Name" required />
          <label class="align-self-start d-flex" for="Message">Message</label>
          <input class="my-1 p-2 message-container" type="textarea" id="Message" name="Message"
            placeholder="Enter a message" required />
        </div>
        <div class="d-flex col-12 justify-content-center">
          <input type="submit" value="SUBSCRIBE" name="subscribe" class="button" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0 10px;

  .contact-form {
    height: 400px;
    padding: 2vh 0;
    margin-bottom: 5vh;
    background: rgba(black, 0.4);
    backdrop-filter: blur(10px);

    input {
      text-align: center;
      background: rgba($quaternary-color, 0.8);

      border: none;

      &:focus {
        outline: 3px solid $tertiary-color;
      }
    }

    input[type="textarea"] {
      height: 10vh;
    }

    p {
      margin-bottom: 0px;
      font-weight: bold;
    }

    .button {
      width: 145px;
      height: 45px;
      background-color: $tertiary-color;
      color: $quaternary-color;
      border-style: none;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      &:focus {
        transform: scale(1.05);
      }

      &:hover {
        background-color: $primary-color;
        text-decoration: none;
      }
    }

    .content-container {
      label {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
}
</style>