<template>
  <div class="p-8 md:p-20 min-h-screen">
    <h1 class="mb-8 font-serif text-3xl font-bold text-center text-teal-600">Daftar Surat</h1>

    <!-- Susunan Suratnya -->
    <div class="flex flex-col">
      <button
        v-for="surat in paginatedSuratList"
        :key="surat.nomor"
        class="bg-white shadow-lg rounded-md mb-6 text-left p-6 max-w-full transition-transform transform hover:scale-105 hover:shadow-xl"
        @click="bacaSurat(surat.nomor)"
      >
        <!-- Loop through suratList and display each surat -->
        <h2 class="text-2xl font-semibold text-teal-600">Nomor Surat: {{ surat.nomor }}</h2>
        <h3 class="text-lg text-teal-500">Nama Latin: {{ surat.namaLatin }}</h3>
        <p class="text-base text-gray-700">Bahasa Arab: {{ surat.nama }}</p>
        <p class="text-sm text-gray-500">Arti: {{ surat.arti }}</p>
      </button>
    </div>


    <!-- mendengarkan event yang dilempar dari emit pagination page-change -->
    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      
      @page-change="handlePageChange" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useSuratStore } from "@/stores/suratStore";
import Pagination from "./Pagination.vue";
import router from "@/router";

const suratStore = useSuratStore();
const currentPage = ref(1);
const itemsPerPage = 10;

onMounted(() => {
  suratStore.getAllSurat("");
});


// Logic Untuk nampilin  jumlah surat per halaman untuk v-for
const paginatedSuratList = computed(() => {
  const startIndex = (currentPage.value-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return suratStore.suratList.slice(startIndex, endIndex);
});

// logic menghitung jumlah pages untuk nantinya dilempar ke props Pagination
const totalPages = computed(() => {
  return Math.ceil(suratStore.suratList.length / itemsPerPage);
});

// handle emit pagination dan mengubah value current page yang sesuai
const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const bacaSurat = (id:number) => {
  router.push({ name: 'surah', params: { id } });
};

</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
