<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const juzList = ref(
    Array.from({ length: 30 }, (_, i) => ({
        number: i + 1,
        name: `Juz ${i + 1}`,
    }))
);

const selectJuz = (id: number) => {
    router.replace(`/juz/${id}`); // Ubah URL saat user memilih Juz
};
</script>

<template>
    <div class="hidden md:block w-1/3  text-white p-5 shadow-lg overflow-y-auto">
        <div class="grid grid-cols-1 gap-2">
            <div
                v-for="juz in juzList"
                :key="juz.number"
                @click="selectJuz(juz.number)"
                :class="{
                    'bg-teal-300 text-gray-900 font-bold border-teal-500': route.params.id == juz.number.toString(),
                    'bg-white text-gray-800 border-gray-200': route.params.id != juz.number.toString(),
                }"
                class="p-4 shadow rounded-lg text-center border cursor-pointer transition-transform duration-300 ease-in-out 
                        hover:bg-teal-100 hover:transform hover:scale-105"
            >
                <h2 class="text-lg text-left">{{ juz.name }}</h2>
            </div>
        </div>
    </div>
</template>
