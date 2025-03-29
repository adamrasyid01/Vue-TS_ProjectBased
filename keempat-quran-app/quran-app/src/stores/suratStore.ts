import { defineStore } from "pinia"

import { apiBaseGetSurat } from "@/plugins/apiHandler"

export const useSuratStore = defineStore({
    id: "surat",
    state: () => ({
    }),
    actions: {
        getSurat(payload = {}) {
            return apiBaseGetSurat("/surat", payload)
        },
        getSuratById(id: number, payload = {}) {
            return apiBaseGetSurat(`/surat/${id}`, payload)
        },
    },
})