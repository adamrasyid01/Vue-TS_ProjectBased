<template>
  <div class="p-20">
    <h1 class="mb-4">Surat</h1>
    <ul class="pl-6">
      <!-- Loop through suratList and display each surat -->
      <li
        v-for="surat in suratStore.suratList"
        :key="surat.nomor"
        class="mb-4 p-4 bg-white shadow rounded"
      >
        <h2 class="text-lg font-semibold">Nomor: {{ surat.nomor }}</h2>
        <h3 class="text-md">Nama Latin: {{ surat.namaLatin }}</h3>
        <p class="text-sm">Bahasa Arab: {{ surat.nama }}</p>
        <p class="text-xs text-gray-600">Arti: {{ surat.arti }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSuratStore } from '@/stores/suratStore';

const suratStore = useSuratStore();

onMounted(() => {
  suratStore.getSurat();
});
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
