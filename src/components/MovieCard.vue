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
  </li>
</template>

<style scoped></style>
