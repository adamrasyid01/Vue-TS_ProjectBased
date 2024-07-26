<template>
  <nav class="flex flex-wrap items-center justify-center gap-2 pt-4">
    <!-- Previous Page Button -->
    <button 
      :disabled="currentPage <= 1"
      @click="emitPage(currentPage - 1)"
      class="px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50 text-sm md:text-base"
    >
      &laquo; Previous
    </button>   

    <!-- Page Numbers -->
    <div class="flex flex-wrap gap-2 md:gap-4">
      <button
        v-for="page in pages"
        :key="page"
        @click="emitPage(page)"
        :class="[
          'px-3 py-1.5 md:px-4 md:py-2 rounded',
          {
            'bg-teal-500 text-white': page === currentPage,
            'bg-slate-200 text-gray-700': page !== currentPage,
          },
        ]"
        class="text-sm md:text-base"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Page Button -->
    <button
      :disabled="currentPage >= totalPages"
      @click="emitPage(currentPage + 1)"
      class="px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50 text-sm md:text-base"
    >
      Next &raquo;
    </button>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

// Menangkap total dan halaman sekarang dari CardSurah.vue
const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

// Definisikan emit untuk pindah2 halaman
const emit = defineEmits<{
  (event: "page-change", page: number): void;
}>();

// Untuk memberikan nilai ke kotak2 paginationnya
const pages = computed(() => {
  const result = [];
  for (let i = 1; i <= props.totalPages; i++) {
    result.push(i);
  }
  return result;
});

// memancarkan event ke komponent CardSurah.cue
const emitPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("page-change", page);
  }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
