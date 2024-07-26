<template>
    <div class="p-4 md:p-8 flex gap-8">
       
        <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div class="flex items-center space-x-4 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                <div class="text-center">
                    <span class="text-4xl md:text-6xl font-bold text-blue-500">{{ props.years}}</span>
                </div>
                <div class="text-gray-600 text-xl md:text-3xl">
                    Years
                </div>
            </div>
        </div>
          <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div class="flex items-center space-x-4 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                <div class="text-center">
                    <span class="text-4xl md:text-6xl font-bold text-blue-500">{{ props.months }}</span>
                </div>
                <div class="text-gray-600 text-xl md:text-3xl">
                    Months
                </div>
            </div>
        </div>
          <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div class="flex items-center space-x-4 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                <div class="text-center">
                    <span class="text-4xl md:text-6xl font-bold text-blue-500">{{ props.days }}</span>
                </div>
                <div class="text-gray-600 text-xl md:text-3xl">
                    Days
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">



const props = defineProps<{
    years: number,
    months: number,
    days:number
}>()// Contoh hari
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
