<script lang="ts" setup>
import { onMounted } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import MovieCard from '@/components/MovieCard.vue';

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getMovies();
});
</script>

<template>
  <div>
    <h1>Movies</h1>
  </div>
  <section>
    <div v-if="moviesStore.loading">Loading...</div>
    <div v-else-if="moviesStore.error">{{ moviesStore.error }}</div>
    <ul class="movies-list" v-else>
      <MovieCard v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie" />
    </ul>
  </section>
</template>

<style scoped>
.movies-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.movies-list li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
