<template>
  <div>
    <h1>Movies</h1>
  </div>
  <section>
    <div v-if="moviesStore.loading">Loading...</div>
    <div v-else-if="moviesStore.error">{{ moviesStore.error }}</div>
    <div class="movie-detail" v-else>
      <h2 v-if="!selectedMovie">Details not found</h2>
      <h2 v-else>{{ selectedMovie.title }}</h2>
      <div>
        <dl class="movie-details">
          <dt>Genre</dt>
          <dd>{{ selectedMovie?.genre }}</dd>
          <dt>Description</dt>
          <dd>{{ selectedMovie?.description }}</dd>
          <dt>Rating</dt>
          <dd>{{ selectedMovie?.rating }}</dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import type { Movie } from '../../server/data';

const moviesStore = useMoviesStore();

const { id } = defineProps<{
  id: string;
}>();

onMounted(async () => {
  if (!moviesStore.movies?.length) {
    await moviesStore.getMovies();
  }
});

const selectedMovie = computed<Movie | undefined>(() =>
  moviesStore.movies?.find((movie: Movie) => movie.id === parseInt(id)),
);
</script>

<style scoped>
.movie-details {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 6px 12px;
}

.movie-details dt {
  font-weight: bold;
}

.movie-details dt::after {
  content: ': ';
}
</style>
