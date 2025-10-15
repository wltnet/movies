import { createRouter, createWebHistory } from 'vue-router';
import MoviesList from '@/pages/MoviesList.vue';
import MoviesDetails from '@/pages/MovieDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: MoviesList,
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: MoviesDetails,
      props: true,
    },
  ],
});

export default router;
