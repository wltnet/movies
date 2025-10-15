import { createRouter, createWebHistory } from 'vue-router';
import MoviesList from '@/pages/MoviesList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: MoviesList,
    },
  ],
});

export default router;
