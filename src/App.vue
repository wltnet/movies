<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link class="nav-link" to="/"> Movies List </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/ratingchart"> Rating chart </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: #369;
}
a:hover {
  color: #366;
  text-decoration: underline;
}
</style>

<style scoped>
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
header ul li {
  margin-right: 10px;
}
.router-link-active {
  color: #366;
  text-decoration: underline;
}
</style>
