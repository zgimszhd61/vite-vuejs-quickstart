// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Bbb from '../views/Bbb.vue';
import Ccc from '../views/Ccc.vue';
import Ddd from '../views/Ddd.vue';
import Eee from '../views/Eee.vue';
import Fff from '../views/Fff.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bbb',
    name: 'Bbb',
    component: Bbb,
  },
  {
    path: '/ccc',
    name: 'Ccc',
    component: Ccc,
  },
  {
    path: '/ddd/:id',
    name: 'Ddd',
    component: Ddd,
    props: true,
  },
  {
    path: '/eee',
    name: 'Eee',
    component: Eee,
  },
  {
    path: '/fff',
    name: 'Fff',
    component: Fff,
  },

  // 你可以在这里添加更多的路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;