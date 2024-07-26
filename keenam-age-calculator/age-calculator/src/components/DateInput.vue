<template>
    <div class="w-full flex flex-col gap-2 p-8">
        <label class="text-gray-700 font-medium ">{{ labelInputan }}</label>
        <div>
            <input type="text" :placeholder="placeholder" :maxlength="panjangInputan"
                class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" v-model="inputValue" @input="emitValue"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    labelInputan: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    panjangInputan: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits<{ (event: 'update', value: string): void }>();
const inputValue = ref<string>("")

const emitValue = () => {
    emit('update',inputValue.value)
}
</script>

<style scoped>
/* Tambahkan styling tambahan di sini jika diperlukan */
</style>
