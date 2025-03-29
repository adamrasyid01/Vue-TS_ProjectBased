<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useSuratStore } from "@/stores/suratStore";
import Pagination from "@/components/Pagination.vue";
import router from "@/router";

const suratStore = useSuratStore();
const currentPage = ref(1);
const itemsPerPage = 10;

// Hitung total halaman
const totalPages = computed(() => {
  return suratResponse.value ? Math.ceil(suratResponse.value.length / itemsPerPage) : 1;
});

// Data yang akan ditampilkan di halaman saat ini
const paginatedSurat = computed(() => {
  if (!suratResponse.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return suratResponse.value.slice(start, end);
});

// Ubah halaman saat user memilih di pagination
const changePage = (page: number) => {
  currentPage.value = page;
};

onMounted(() => {
  fetchSurat()
});


const fetchSurat = async () => {
  try {
    const response = await suratStore.getSurat();
    suratResponse.value = response;
    console.log("Data surat:", suratResponse.value);
    console.log(response);
  } catch (error) {
    console.error("Error fetching surat data:", error);
  }
};

const suratResponse = ref();

const bacaSurat = (id: number) => {
  router.push({ name: 'surah', params: { id } });
};

</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>


<template>
  <div class="p-8 md:p-20 min-h-screen">
    <h1 class="mb-8 font-serif text-3xl font-bold text-center text-teal-600">Daftar Surat</h1>

    <!-- Susunan Suratnya -->
    <div class="flex flex-col">

      <button v-for="surat in paginatedSurat" :key="surat.nomor"
        class="bg-white shadow-lg rounded-md mb-6 text-left p-6 max-w-full transition-transform transform hover:scale-105 hover:shadow-xl"
        @click="bacaSurat(surat.nomor)">
        <!-- Loop through suratList and display each surat -->
        <h2 class="text-2xl font-semibold text-teal-600">Nomor Surat: {{ surat.nomor }}</h2>
        <h3 class="text-lg text-teal-500">Nama Latin: {{ surat.namaLatin }}</h3>
        <p class="text-base text-gray-700">Bahasa Arab: {{ surat.nama }}</p>
        <p class="text-sm text-gray-500">Arti: {{ surat.arti }}</p>
      </button>

      <Pagination :totalPages="totalPages" :currentPage="currentPage" @page-change="changePage" />
    </div>

  </div>
</template>
