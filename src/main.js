import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "vue-mailchimp-email-signup-form/dist/vue-mailchimp-email-signup-form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

createApp(App).use(router).mount('#app')
