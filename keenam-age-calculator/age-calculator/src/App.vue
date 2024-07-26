<script setup lang="ts">
import { ref } from "vue";
import ButtonSubmit from "./components/ButtonSubmit.vue";
import DateInput from "./components/DateInput.vue";
import DisplayUmur from "./components/DisplayUmur.vue";

const day = ref<number>(0);
const month = ref<number>(0);
const year = ref<number>(0);

const updateDay = (value: string) => {
  day.value = Number(value);
};
const updateMonth = (value: string) => {
  month.value = Number(value);
};
const updateYear = (value: string) => {
  year.value = Number(value);
};

const ageYears = ref<number>(0);
const ageMonth = ref<number>(0);
const ageDay = ref<number>(0);

// Hitung Umurnya
const calculateAge = () => {


  // Pastikan input tidak kosong

  if (day.value <= 0 || month.value <= 0 || year.value <= 0) {
    alert("Hari, Bulan, dan Tahun tidak boleh negatif atau nol.");
    return;
  } else{
    const today = new Date();

    const birthDate = new Date(year.value, month.value - 1, day.value);
    let ageYearsVal = today.getFullYear() - birthDate.getFullYear();
    let ageMonthsVal = today.getMonth() - birthDate.getMonth();
    let ageDaysVal = today.getDate() - birthDate.getDate();

    if (ageDaysVal < 0) {
      ageMonthsVal--;
      ageDaysVal += new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
    }

    if (ageMonthsVal < 0) {
      ageYearsVal--;
      ageMonthsVal += 12;
    }

    ageYears.value = ageYearsVal;
    ageMonth.value = ageMonthsVal;
    ageDay.value = ageDaysVal;
  }

  // Setel nilai umur
};
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Inputan Hari -->
    <div class="flex">
      <DateInput
        labelInputan="Day"
        placeholder="DD"
        :panjangInputan="3"
        @update="updateDay"
      />
      <DateInput
        labelInputan="Month"
        placeholder="MM"
        :panjangInputan="2"
        @update="updateMonth"
      />
      <DateInput
        labelInputan="Year"
        placeholder="YYYY"
        :panjangInputan="4"
        @update="updateYear"
      />
    </div>
    <ButtonSubmit @click="calculateAge" />

    <div class="text-center">
      <h1 class="text-2xl md:text-3xl font-bold">Umur Kamu Saat Ini</h1>
    </div>

    <div class="flex justify-center">
      <DisplayUmur :years="ageYears" :months="ageMonth" :days="ageDay" />
    </div>
  </div>
</template>
