<script lang="ts" setup>
import type { Movie } from '../../server/data';

const { movie } = defineProps<{
  movie: Movie;
}>();
</script>

<template>
  <li>
    <h2>{{ movie.title }}</h2>
    <div>{{ movie.genre }} | Rating: {{ movie.rating }}</div>
    <div class="detail">
      <router-link
        :to="{ name: 'Movie', params: { id: movie.id } }"
        :aria-label="`See details of ${movie.title}`"
      >
        Details
      </router-link>
    </div>
  </li>
</template>

<style scoped>
.detail {
  margin-top: 5px;
}
</style>
