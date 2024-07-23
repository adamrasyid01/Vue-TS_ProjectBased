<template>
    <ul class="flex justify-center gap-x-6 text-lg">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.href" class="hover:text-black">{{ item.name }}</router-link>
          </li>
        </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navItems = ref([
  { name: 'Home', href: '/' },
  { name: 'Surah', href: '/surah' },
  { name: 'Juz', href: '/juz' },
  { name: 'Tafsir', href: '/tafsir' },
]);
</script>