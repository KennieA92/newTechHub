<template>
  <div class="login min-vh-100 d-flex justify-content-center align-items-center flex-column">
    <h1>Login</h1>
    <form @submit.prevent="login" class="d-flex col-10 col-md-6 flex-column justify-content-center align-items-center">
      <input class="col-10" type="text" placeholder="Email" v-model="email" />
      <input class="col-10" type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" class="btn-login">
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase/compat/app';
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const email = ref("")
    const password = ref("")
    const login = async () => {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => { })
        .catch(err => alert(err.message)); // just to check if we want
      router.replace('/admin')
    }
    return { login, email, password } // remember me!
    // test - email badly formatted - No user existing at all
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding-top: 80px;

  h1 {
    color: black;
  }

  input {
    text-align: center;
    padding: 0.4em 0.6em;
    margin: 0.4em 0.6em;
    background: rgba($quaternary-color, 0.8);
    border: solid 0.1px $primary-color;

    &:focus {
      outline: 3px solid $tertiary-color;
      border: none;
    }
  }

  .btn-login {
    width: 145px;
    min-height: 45px;
    background-color: $tertiary-color;
    color: $quaternary-color;
    border-radius: 25px;
    margin-top: 20px;
    text-decoration: none;

    &:focus {
      transform: scale(1.05);
    }

    &:hover {
      background-color: $primary-color;
      text-decoration: none;
    }
  }

}
</style>
