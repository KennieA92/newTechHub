import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // For login stuff
import LoginView from '../views/LoginView.vue';
import EditTechEventView from '../views/EditTechEventView.vue';
import TechStartUpView from '../views/TechStartUpView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/techEvent/edit/:id', // id parameter to know which project we clicked
    name: 'EditTechEvent',
    component: EditTechEventView,
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AdminView.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/EventView.vue'),
  }, {
    path: '/techStartUp',
    name: 'TechStartUp',
    component: TechStartUpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
