import { defineStore } from "pinia"
import axiosInstance from "@/plugins/axios"
import type { SuratState } from "@/type"

export const useSuratStore = defineStore('suratStore', {
    state: (): SuratState => ({
        suratList: [],
        loading: false,
        error:null
    }),
    actions: {
        async getSurat() {
            this.loading = true;
            this.error = null

            try {
                const surat = await axiosInstance.get('')
                this.suratList = surat.data.data
                console.log('Surat List:', this.suratList);
            } catch (error) {   
                this.error = "Failed"
            } finally {
                this.loading = false;
            }
        }
  },
})