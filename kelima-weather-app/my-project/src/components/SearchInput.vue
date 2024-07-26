<script setup lang="ts">
import { reactive } from "vue";

const nowSearch = reactive < any > ({
    query: "",
    timeout: null,
    results: null,
});

const handleSearch = () => {
    if (nowSearch.timeout) {
        clearTimeout(nowSearch.timeout);
    }

    nowSearch.timeout = setTimeout(async () => {
        try {
            if (nowSearch.query !== "") {
                const res = await fetch(
                    `http://api.weatherapi.com/v1/search.json?key=a39561c4d6294abfad435053242507&q=${nowSearch.query}`
                );
                const data = await res.json();
                nowSearch.results = data
                console.log(nowSearch.results);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }, 500);
};
</script>

<template>
    <div>
        <!-- search field -->
        <form>
            <div class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center">
                <i class="fa-solid fa-magnifying-glass p-2 text-indigo-600"></i>
                <input type="text" placeholder="Search for a place"
                    class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
                    v-model="nowSearch.query" @input="handleSearch" />
            </div>
        </form>

        <!-- search suggestions -->
        <div class="bg-white my-2 rounded-lg shadow-lg">
            <div v-for="place in nowSearch.results" :key="place.id" >
                <button class="px-3 my-2 hover:text-indigo-600 hover:font-bold w-full text-left">
                    {{ place.name }}, {{ place.region }}, {{ place.country }}
                </button>
            </div>
        </div>
    </div>
</template>
