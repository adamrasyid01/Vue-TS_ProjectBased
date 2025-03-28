import { defineStore } from "pinia"

import { apiBaseGet } from "@/plugins/apiHandler"

export const useSuratStore = defineStore({
    id: "surat",
    state: () => ({
    }),
    actions: {
        getSurat(payload = {}) {
            return apiBaseGet("/surat", payload)
        },
        getSuratById(id: number, payload = {}) {
            return apiBaseGet(`/surat/${id}`, payload)
        },
    },
})