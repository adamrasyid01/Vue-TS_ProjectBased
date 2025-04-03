<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Navbar from './components/Navbar.vue'

</script>

<template>
  <div class="flex flex-col ">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>
</style>
