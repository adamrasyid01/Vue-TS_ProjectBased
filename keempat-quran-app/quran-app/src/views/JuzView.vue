<script setup lang="ts">
import JuzPage from "@/pages/JuzPage.vue";
import { onMounted, ref, watch } from "vue";
import JuzSidebar from "@/components/JuzSidebar.vue";
import { useJuzStore } from "@/stores/juzStore";
import { useRoute, useRouter } from "vue-router";

const juzStore = useJuzStore();
const juzResponse = ref()

const route = useRoute();
const router = useRouter();

const fetchJuz = async (id: number) => {
    try {
        const response = await juzStore.getJuzById(id);
        juzResponse.value = response;
        console.log("Juz data fetched successfully:", juzResponse.value);
    } catch (error) {
        console.error("Error fetching juz data:", error);
    }
};

onMounted(() => {
    if (!route.params.id) {
        router.replace("/juz/1");
    } else {
        fetchJuz(Number(route.params.id));
    }
});

// Cegah pemanggilan API ganda dengan membandingkan ID lama dan baru
watch(() => route.params.id, (newId, oldId) => {
    if (newId && newId !== oldId) {
        fetchJuz(Number(newId));
    }
});
</script>

<template>
    <div class="flex h-screen pt-16   ">
        <!-- Sidebar -->
        <JuzSidebar />
        <!-- Main Content -->
        <div class="flex-1 overflow-y-auto p-4">
            <JuzPage :juz-data="juzResponse" />
        </div>
    </div>
</template>
