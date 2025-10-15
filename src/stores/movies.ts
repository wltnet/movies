import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Movies } from '../../server/data';

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movies | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const getMovies = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/movies');

      if (!response.ok) {
        throw new Error('Cannot fetch data, please try again.');
      }

      const data: Movies = await response.json();
      movies.value = data;
    } catch (err) {
      error.value = (err as Error).message || 'Failed to fetch movies';
      movies.value = null;
    } finally {
      loading.value = false;
    }
  };

  return { movies, loading, error, getMovies };
});
