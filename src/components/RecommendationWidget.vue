<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import type { Movie } from '../../server/data';

const { selectedMovie } = defineProps<{
  selectedMovie: Movie;
}>();

const moviesStore = useMoviesStore();

onMounted(async () => {
  if (!moviesStore.movies?.length) {
    await moviesStore.getMovies();
  }
});

const recommendation = computed<Movie | null>(() => {
  const moviesWithSameGenre = moviesStore?.movies?.filter(
    (movie) => movie.genre === selectedMovie.genre && movie.id !== selectedMovie.id,
  );

  if (moviesWithSameGenre === undefined || moviesWithSameGenre.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * moviesWithSameGenre.length);

  return moviesWithSameGenre[randomIndex] ?? null;
});
</script>

<template>
  <div v-if="recommendation">
    If you like {{ selectedMovie.title }} try
    <router-link :to="{ name: 'Movie', params: { id: recommendation.id } }">{{
      recommendation.title
    }}</router-link>
  </div>
</template>

<style scoped></style>
