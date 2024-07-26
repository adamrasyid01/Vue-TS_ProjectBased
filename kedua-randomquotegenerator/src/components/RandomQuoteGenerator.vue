<script lang="ts" setup>
import { reactive, ref } from 'vue';


interface Quotes {
  text: string;
  by: string;
}


const quotesStorages = reactive<Quotes[]>([
  {
    text: "The only limit to our realization of tomorrow is our doubts of today. ",
    by: "- Franklin D. Roosevelt",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    by: "- Martin Luther King Jr"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    by:" - John Lennon"
  },
  {
    text: "The purpose of our lives is to be happy.",
    by: "- Dalai Lama"
  },
  {
    text: "Get busy living or get busy dying",
    by: "Stephen King"
  }


])

const currentQuotes = ref<Quotes>()

// const tesquotes = () => {
//   console.log(currentQuotes.value);

// }

// Fungsi untuk merandom quores 
const randomizeQuotes = () => {
  for (let i = quotesStorages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quotesStorages[i], quotesStorages[j]] = [quotesStorages[j], quotesStorages[i]];
  }
  currentQuotes.value = quotesStorages[0];


  // console.log(currentQuotes.value)
}
</script>


<template>
  <div>
    <p class="kata-kata">Kata-Kata Hari ini Boskuh</p>
    <p v-show="currentQuotes">{{ currentQuotes?.text }}  {{ currentQuotes?.by}}</p>
    <p v-show="!currentQuotes">Coba Klik Button di bawah ya!</p>
  </div>
   <div>
     <!-- <button @click="tesquotes">Buat tes</button> -->
    <button @click="randomizeQuotes">Randomize Quotes</button>
  </div>


  <!-- Ngecek randomnya berhasil apa ngga -->
    <ul>
      <li v-for="(quote, index) in quotesStorages" :key="index">
        {{ quote.text }} {{ quote.by }}
      </li>
    </ul> 


</template>
<style scoped>
.kata-kata{
  font-weight:600 ;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40;
}
</style>