<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartData,
} from 'chart.js';
import { useMoviesStore } from '@/stores/movies';

const moviesStore = useMoviesStore();

onMounted(async () => {
  if (!moviesStore.movies?.length) {
    await moviesStore.getMovies();
  }
});

/*
 AI-assisted: Given moviesStore from Pinia which return { movies, loading, error, getMovies },
  getMovies is an action to call api and movies dataset are [{
    id: number;
    title: string;
    genre: string;
    description: string;
    rating: number;
}],
  add a chart to show average rating by genre using chart.js and typescript in vue3
 */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const genreAverages = computed<Record<string, number>>(() => {
  const sums: Record<string, { total: number; count: number }> = {};

  if (!moviesStore.movies) return {};

  for (const movie of moviesStore.movies) {
    if (!sums[movie.genre]) sums[movie.genre] = { total: 0, count: 0 };
    const entry = sums[movie.genre]!;
    entry.total += movie.rating;
    entry.count++;
  }

  const result: Record<string, number> = {};
  for (const [genre, { total, count }] of Object.entries(sums)) {
    result[genre] = +(total / count).toFixed(2);
  }

  return result;
});

const chartData = computed<ChartData<'bar'>>(() => ({
  labels: Object.keys(genreAverages.value),
  datasets: [
    {
      label: 'Average Rating per Genre',
      data: Object.values(genreAverages.value),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
}));

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Average Rating by Genre',
      font: { size: 18 },
    },
  },
  scales: {
    y: { beginAtZero: true, max: 10 },
  },
};
/* End of  AI-assisted */
</script>

<template>
  <div>
    <h1>Movies Rating Chart</h1>
  </div>
  <section class="chart-container">
    <div v-if="moviesStore.loading">Loading...</div>
    <div v-else-if="moviesStore.error">{{ moviesStore.error }}</div>
    <Bar v-else :data="chartData" :options="chartOptions" />
  </section>
</template>

<style scoped>
.chart-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
