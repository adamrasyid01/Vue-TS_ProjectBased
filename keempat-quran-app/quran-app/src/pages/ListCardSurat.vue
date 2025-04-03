<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useSuratStore } from "@/stores/suratStore";
import Pagination from "@/components/Pagination.vue";
import router from "@/router";

const suratStore = useSuratStore();
const currentPage = ref(1);
const itemsPerPage = 10;



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
  router.push({ name: 'detail-surat', params: { id } });
};

</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>


<template>
  <div class="p-8 md:p-20 min-h-screen">
    <h1 class="mb-8 font-serif text-3xl font-bold text-center text-teal-600">Daftar Surat</h1>

    <!-- Susunan Suratnya -->
    <div class="grid md:grid-cols-3 gap-4">

      <div v-for="surat in suratResponse" :key="surat.nomor"
       class="p-3 shadow rounded-lg text-left border cursor-pointer transition-transform duration-300 ease-in-out 
                        hover:bg-teal-100 hover:transform hover:scale-105"
        @click="bacaSurat(surat.nomor)">
        <!-- Loop through suratList and display each surat -->
        <h2 class="text-md  text-teal-600">Nomor Surat: {{ surat.nomor }}</h2>
        <h3 class="text-xl font-bold ">{{ surat.namaLatin }}</h3>
        <!-- <p class="text-xs text-end text-gray-700">{{ surat.nama }}</p> -->
        <p class="text-sm text-gray-500">Arti: {{ surat.arti }}</p>
      </div>


    </div>
    <!-- <Pagination :totalPages="totalPages" :currentPage="currentPage" @page-change="changePage" /> -->

  </div>
</template>
