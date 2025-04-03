<script setup lang="ts">
import { defineProps } from "vue";

// Menerima data dari JuzView.vue
interface Ayat {
    id: number;
    arab: string;
    latin: string;
    text: string;
    audio: string;
    notes?: string;
    juz: number; // Added the missing 'juz' property
}

const props = defineProps<{
    juzData: Ayat[];
}>();
</script>

<template>
    <div class="p-2 bg-white rounded shadow-md">
        <h1 class="text-4xl font-bold text-teal-600 text-center mb-4">Juz {{ juzData?.[0]?.juz }}</h1>

        <div v-if="props.juzData && props.juzData.length" class="space-y-6">
            <div v-for="ayat in props.juzData" :key="ayat.id" class="p-4 border-b border-gray-300">
                <p class="text-right text-2xl font-arabic leading-relaxed text-gray-900">
                    {{ ayat.arab }}
                </p>
                <p class="text-teal-400 italic mt-2">{{ ayat.latin }}</p>
                <p class="text-gray-600 mt-2">{{ ayat.text }}</p>

                <audio :src="ayat.audio" controls class="mt-2 w-full"></audio>

                <p v-if="ayat.notes" class="mt-2 text-sm text-gray-500">Catatan: {{ ayat.notes }}</p>
            </div>
        </div>

        <p v-else class="text-center text-gray-500">Loading...</p>
    </div>
</template>

<style scoped>
.font-arabic {
    font-family: "Amiri", serif; /* Gunakan font arab jika tersedia */
}
</style>
