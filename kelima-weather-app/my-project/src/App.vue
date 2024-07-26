<script setup lang="ts">
import SearchInput from './components/SearchInput.vue';
</script>
<template>
  <main>
    <!-- Date -->
    <div>
      {{
        new Date().toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </div>

    <!-- Search -->
     <div>
      <SearchInput/>
     </div>
  </main>
</template>
