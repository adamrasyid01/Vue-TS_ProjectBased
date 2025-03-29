

import { defineStore } from "pinia"

import { apiBaseGetJuz } from "@/plugins/apiHandler"

export const useJuzStore = defineStore({
    id: "juz",
    state: () => ({
    }),
    actions: {
        getJuzById(id: number, payload = {}) {
            return apiBaseGetJuz(`/${id}`, payload)
        },
    },
})