<script setup lang="ts">
import { useSuratStore } from "@/stores/suratStore";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const suratId = Number(route.params.id);
const suratStore = useSuratStore();
const detailSurat = ref();



onMounted(() => {
  fetchDetailSurat(suratId);
});

const fetchDetailSurat = async (id: number) => {
  try {
    const response = await suratStore.getSuratById(id);
    detailSurat.value = response;

  } catch (error) {
    console.error("Error fetching surat data:", error);
  }
};
</script>

<template>
  <div v-if="detailSurat" class="p-8 mt-12">
    <h1 class="text-4xl font-bold py-6 text-center text-teal-600">
      {{ detailSurat.nama }} {{ detailSurat.namaLatin }}
    </h1>
    <hr class="border-gray-300 mb-6" />

    <!-- Loop melalui setiap ayat -->
    <div v-for="ayat in detailSurat.ayat" :key="ayat.nomorAyat" class="mb-6 p-4 border rounded shadow ">
      <h2 class="text-xl">
        Ayat {{ ayat.nomorAyat }}
      </h2>
      <p class="text-right text-2xl leading-relaxed font-arabic">
        {{ ayat.teksArab }}
      </p>
      <p class=" text-teal-400 italic text-left">
        {{ ayat.teksLatin }}
      </p>
      <p class="text-base text-gray-700 text-left">
        {{ ayat.teksIndonesia }}
      </p>

      <!-- Audio Player -->
      <audio controls class="mt-4 w-full">
        <source :src="ayat.audio['05']" type="audio/mp3" />
        Browser tidak mendukung audio.
      </audio>
    </div>
  </div>

  <!-- Tampilkan loading jika data belum tersedia -->
  <div v-else class="text-center text-gray-500 text-xl">
    Loading...
  </div>
</template>
